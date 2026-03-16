import { useEffect, useMemo, useState } from 'react'
import './Meetups.css'

const MEETUP_GROUP_URL = 'https://www.meetup.com/pydata-lagos'
const EVENTS_CACHE_URL = `${import.meta.env.BASE_URL}events-cache.json`

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

const toGoogleCalendarDate = (isoDate) => new Date(isoDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')

const createCalendarUrl = (event) => {
    const start = event.dateISO
    const end = event.endISO || new Date(new Date(start).getTime() + 2 * 60 * 60 * 1000).toISOString()
    const details = [event.details, event.link].filter(Boolean).join('\n\n')

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`,
        details
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
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
                endISO: event?.end_time ? new Date(event.end_time).toISOString() : null,
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

        const parseApiKey = import.meta.env.VITE_PARSE_API_KEY
        const scraperId = import.meta.env.VITE_PARSE_SCRAPER_ID || '5a81d537-afb2-4a08-bb42-7f097e69f0d0'
        const parseUrl = `https://api.parse.bot/scraper/${scraperId}/get_all_events`

        const processEventsData = (eventsArray, timestamp, isLive) => {
            const normalized = normalizeFromCache(eventsArray)
            // Use local date string comparison to avoid strict timezone dropoffs
            // Just comparing start of today works better for events happening "today"
            const todayStr = new Date().toISOString().split('T')[0]

            const upcoming = normalized
                .filter((event) => {
                    const eventDateStr = new Date(event.dateISO).toISOString().split('T')[0]
                    return eventDateStr >= todayStr
                })
                .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime())
                .slice(0, 3)

            const now = Date.now()
            const recentPast = normalized
                .filter((event) => new Date(event.dateISO).getTime() < now && !upcoming.some(u => u.id === event.id))
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
                setError('No events available yet.')
            }

            if (timestamp) {
                const formattedTime = new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit'
                }).format(new Date(timestamp))
                
                setLastUpdated(`${isLive ? 'Live' : 'Cached feed'} (${formattedTime})`)
            }
        }

        const fetchLiveEvents = async () => {
            if (!parseApiKey) return false
            try {
                const response = await fetch(parseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': parseApiKey
                    },
                    body: JSON.stringify({ limit: 50, offset: 0 })
                })

                if (!response.ok) return false
                
                const payload = await response.json()
                const eventsArray = payload?.data?.events || payload?.events || []
                
                if (eventsArray.length > 0) {
                    processEventsData(eventsArray, Date.now(), true)
                    return true
                }
                return false
            } catch (err) {
                console.warn('Live fetch failed, falling back to cache:', err)
                return false
            }
        }

        const fetchCachedEvents = async () => {
            try {
                const response = await fetch(EVENTS_CACHE_URL, { cache: 'no-store' })
                if (!response.ok) throw new Error(`Unable to load events cache (${response.status})`)

                const raw = await response.text()
                let data = null
                try {
                    data = JSON.parse(raw)
                } catch {
                    throw new Error('Events cache is not valid JSON.')
                }
                
                processEventsData(data?.events || [], data?.generated_at, false)
            } catch (err) {
                if (!isMounted) return
                setError(err instanceof Error ? err.message : 'Unable to load events.')
                setEvents([])
            }
        }

        const loadEvents = async () => {
            setLoading(true)
            setError('')
            
            const liveSuccess = await fetchLiveEvents()
            if (!liveSuccess && isMounted) {
                await fetchCachedEvents()
            }
            
            if (isMounted) setLoading(false)
        }

        loadEvents()

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
                                    href={createCalendarUrl(event)}
                                    className="calendar-btn"
                                    title="Add to Calendar"
                                    aria-label={`Add ${event.title} to Google Calendar`}
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
