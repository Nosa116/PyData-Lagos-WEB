import { useEffect, useMemo, useState } from 'react'
import './Meetups.css'

const MEETUP_GROUP_URL = 'https://www.meetup.com/pydata-lagos'

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
    if (mode === 'past') return 'Past Event'
    return 'Community'
}

const toMode = (eventType, isOnline) => {
    const raw = String(eventType || '').toLowerCase()
    if (raw.includes('hybrid')) return 'hybrid'
    if (isOnline === true || raw.includes('online') || raw.includes('virtual')) return 'online'
    if (isOnline === false || raw.includes('physical') || raw.includes('in-person')) return 'physical'
    return 'unknown'
}

const normalizeFromCache = (events) => {
    if (!Array.isArray(events)) return []

    return events
        .map((event, index) => {
            const date = new Date(event?.date_time)
            if (Number.isNaN(date.getTime())) return null

            return {
                id: String(event?.id || `event-${index}`),
                title: event?.title || `Meetup Event ${index + 1}`,
                mode: toMode(event?.event_type, event?.is_online),
                details: event?.description || '',
                dateISO: date.toISOString(),
                link: event?.event_url || MEETUP_GROUP_URL
            }
        })
        .filter(Boolean)
}

const Meetups = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showingPastFallback, setShowingPastFallback] = useState(false)
    const [error, setError] = useState('')
    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(() => {
        let isMounted = true

        const loadCachedFile = async () => {
            try {
                const response = await fetch('/events-cache.json', { cache: 'no-store' })
                if (!response.ok) throw new Error(`Unable to load events cache (${response.status})`)

                const data = await response.json()
                const normalized = normalizeFromCache(data?.events || [])
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
                    setError('No events available in shared cache yet.')
                }

                if (data?.generated_at) {
                    setLastUpdated(
                        new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric'
                        }).format(new Date(data.generated_at))
                    )
                }
            } catch (err) {
                if (!isMounted) return
                setError(err instanceof Error ? err.message : 'Unable to load events.')
                setEvents([])
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        loadCachedFile()

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
                    {lastUpdated && !error && (
                        <p className="meetups-note fade-in-up">
                            Event feed last refreshed: {lastUpdated}
                        </p>
                    )}
                    {showingPastFallback && (
                        <p className="meetups-note fade-in-up">
                            Upcoming events are currently unavailable. Showing recent past events.
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
