import { useEffect, useMemo, useState } from 'react'
import './Meetups.css'

const PARSE_BASE_URL = 'https://api.parse.bot'
const PARSE_SCRAPER_ID = import.meta.env.VITE_PARSE_SCRAPER_ID || '5a81d537-afb2-4a08-bb42-7f097e69f0d0'
const MEETUP_GROUP_URL = 'https://www.meetup.com/pydata-lagos'

const parseDateValue = (value) => {
    if (!value) return null
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? null : date
}

const normalizeMode = (event) => {
    const raw = String(
        event?.mode ||
            event?.event_type ||
            event?.event_mode ||
            event?.format ||
            event?.eventType ||
            event?.venue_type ||
            ''
    ).toLowerCase()

    if (raw.includes('hybrid')) return 'hybrid'
    if (raw.includes('online') || raw.includes('virtual')) return 'online'
    if (raw.includes('physical') || raw.includes('in-person') || raw.includes('offline')) return 'physical'
    return 'unknown'
}

const normalizeEvents = (events) => {
    if (!Array.isArray(events)) return []

    return events
        .map((event, index) => {
            const date = parseDateValue(
                event?.date_time ||
                    event?.date ||
                    event?.datetime ||
                    event?.time ||
                    event?.start_time ||
                    event?.start_date
            )

            const title =
                event?.title || event?.name || event?.event_title || event?.event_name || `Meetup Event ${index + 1}`

            return {
                id: String(event?.id || event?.event_id || event?.uuid || `event-${index}`),
                title,
                mode: normalizeMode(event),
                details: event?.details || event?.description || '',
                dateISO: date ? date.toISOString() : null,
                link: event?.url || event?.event_url || event?.link || MEETUP_GROUP_URL
            }
        })
        .filter((event) => event.dateISO)
}

const formatDateParts = (dateISO) => {
    const date = new Date(dateISO)
    return {
        dateTag: new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(date),
        dayText: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date),
        timeText: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(date)
    }
}

const modeLabel = (mode) => {
    if (mode === 'online') return 'Online'
    if (mode === 'physical') return 'Physical'
    if (mode === 'hybrid') return 'Hybrid'
    return 'Community'
}

const Meetups = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showingPastFallback, setShowingPastFallback] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true

        const fetchEvents = async () => {
            const apiKey = import.meta.env.VITE_PARSE_API_KEY

            if (!apiKey) {
                setError('Parse API key is not configured.')
                setLoading(false)
                return
            }

            try {
                const response = await fetch(
                    `${PARSE_BASE_URL}/scraper/${PARSE_SCRAPER_ID}/get_all_events`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': apiKey
                        },
                        body: JSON.stringify({
                            limit: 20,
                            offset: 0
                        })
                    }
                )

                if (!response.ok) {
                    throw new Error(`Failed to fetch events (${response.status})`)
                }

                const data = await response.json()
                const apiEvents = data?.data?.events || data?.events || []
                const normalized = normalizeEvents(apiEvents)
                const now = Date.now()

                const upcoming = normalized
                    .filter((event) => new Date(event.dateISO).getTime() >= now)
                    .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime())
                    .slice(0, 3)

                const recentPast = normalized
                    .filter((event) => new Date(event.dateISO).getTime() < now)
                    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
                    .slice(0, 3)
                    .map((event) => ({ ...event, mode: 'past' }))

                if (!isMounted) return

                if (upcoming.length > 0) {
                    setEvents(upcoming)
                    setShowingPastFallback(false)
                } else if (recentPast.length > 0) {
                    setEvents(recentPast)
                    setShowingPastFallback(true)
                } else {
                    setEvents([])
                    setShowingPastFallback(false)
                    setError('No events found from current scraper output.')
                }
            } catch (fetchError) {
                if (!isMounted) return
                setError(fetchError instanceof Error ? fetchError.message : 'Unable to load Meetup events.')
                setEvents([])
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchEvents()

        return () => {
            isMounted = false
        }
    }, [])

    const eventsForView = useMemo(
        () =>
            events.map((event) => ({
                ...event,
                ...formatDateParts(event.dateISO)
            })),
        [events]
    )

    return (
        <section id="meetups" className="meetups-section">
            <div className="meetups-container">
                <div className="meetups-header">
                    <div className="label fade-in-up">CONNECT & LEARN</div>
                    <h2 className="meetups-main-title fade-in-up">
                        UPCOMING <span className="highlight">MEETUPS</span> & EVENTS
                    </h2>
                    <p className="meetups-tagline fade-in-up">
                        Join the PyData Lagos community for insightful meetups, workshops, 
                        and networking events centered around data science.
                    </p>
                    {showingPastFallback && (
                        <p className="meetups-note fade-in-up">
                            Upcoming events are currently unavailable from the scraper feed. Showing recent past events.
                        </p>
                    )}
                    {!showingPastFallback && error && (
                        <p className="meetups-note fade-in-up">
                            {error}
                        </p>
                    )}
                </div>

                <div className="meetups-list">
                    {!loading && eventsForView.length === 0 && (
                        <div className="meetup-row meetup-empty fade-in-up">
                            <p>No live events available right now. Check the Meetup page for updates.</p>
                        </div>
                    )}
                    {eventsForView.map((event, index) => (
                        <div key={event.id} className="meetup-row fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                            {/* Date Side */}
                            <div className="meetup-date-col">
                                <span className="m-date-tag">{event.dateTag}</span>
                                <span className="m-day-text">{event.dayText}</span>
                                <div className="meetup-meta">
                                    <div className="meta-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        {event.timeText}
                                    </div>
                                    <div className="meta-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        {modeLabel(event.mode)}
                                    </div>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="meetup-info-col">
                                <span className={`m-type-badge ${event.mode}`}>{modeLabel(event.mode)}</span>
                                <h3 className="meetup-title-text">{event.title}</h3>
                                {event.details ? <p className="meetup-details">{event.details}</p> : null}
                            </div>

                            {/* Action Side */}
                            <div className="meetup-action-col">
                                <a
                                    href={event.link || MEETUP_GROUP_URL}
                                    className="register-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {event.mode === 'past' ? 'View Event' : 'Register Now'}
                                </a>
                                <a
                                    href={MEETUP_GROUP_URL}
                                    className="calendar-btn"
                                    title="View Meetup Group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="9" y1="17" x2="15" y2="17"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="meetups-footer fade-in-up">
                    <a href={MEETUP_GROUP_URL} className="past-events-link" target="_blank" rel="noopener noreferrer">
                        {loading ? 'Loading Events...' : 'View All Meetup Events'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Meetups
