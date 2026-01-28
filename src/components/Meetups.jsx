import './Meetups.css'

const Meetups = () => {
    const events = [
        {
            day: "Tuesday",
            date: "Nov 12",
            time: "10:00 AM",
            type: "Workshop",
            location: "Virtual Event",
            title: "Intro to Pandas & NumPy",
            speakers: [
                { name: "Chioma", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma" },
                { name: "Adewale", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adewale" }
            ]
        },
        {
            day: "Thursday",
            date: "Nov 28",
            time: "11:00 AM",
            type: "Keynote",
            location: "Zone Tech Park",
            title: "Machine Learning Deployment",
            speakers: [
                { name: "Tolu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tolu" }
            ]
        },
        {
            day: "Thursday",
            date: "Dec 05",
            time: "09:00 AM",
            type: "Sprint",
            location: "CcHub Lagos",
            title: "Open Source Contribution Sprint",
            speakers: [
                { name: "Ibrahim", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim" }
            ]
        }
    ]

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
                </div>

                <div className="meetups-list">
                    {events.map((event, index) => (
                        <div key={index} className="meetup-row fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                            {/* Date Side */}
                            <div className="meetup-date-col">
                                <span className="m-date-tag">{event.date}</span>
                                <span className="m-day-text">{event.day}</span>
                                <div className="meetup-meta">
                                    <div className="meta-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        {event.time}
                                    </div>
                                    <div className="meta-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        {event.location}
                                    </div>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="meetup-info-col">
                                <span className={`m-type-badge ${event.type.toLowerCase()}`}>{event.type}</span>
                                <h3 className="meetup-title-text">{event.title}</h3>
                                <div className="meetup-speakers">
                                    <div className="speaker-avatars">
                                        {event.speakers.map((s, i) => (
                                            <img key={i} src={s.avatar} alt={s.name} title={s.name} />
                                        ))}
                                    </div>
                                    <span className="speaker-names">
                                        with <strong>{event.speakers.map(s => s.name).join(' & ')}</strong>
                                    </span>
                                </div>
                            </div>

                            {/* Action Side */}
                            <div className="meetup-action-col">
                                <a href="#" className="register-btn">Register Now</a>
                                <button className="calendar-btn" title="Add to Calendar">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="9" y1="17" x2="15" y2="17"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="meetups-footer fade-in-up">
                    <a href="#" className="past-events-link">
                        View Past Events
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