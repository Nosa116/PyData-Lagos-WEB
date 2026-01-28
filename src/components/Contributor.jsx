import './Contributor.css'

const Contributor = () => {
    const perks = [
        {
            title: "Mentorship Impact",
            description: "Guide the next generation of data scientists and shape the future of tech in Africa.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            title: "Global Infrastructure",
            description: "Help build and maintain critical open-source tools used by millions worldwide.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            )
        },
        {
            title: "Community Growth",
            description: "Organize meetups, workshops, and events that bring the ecosystem together.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            )
        }
    ]

    return (
        <section id="contribute" className="contributor-section">
            <div className="contributor-container">
                <div className="contributor-header">
                    <div className="label fade-in-up">CONTRIBUTOR PROGRAM</div>
                    <h2 className="contributor-main-title fade-in-up">
                        DRIVE OPEN SOURCE FORWARD IN <span className="highlight">AFRICA</span>
                    </h2>
                    <p className="contributor-tagline fade-in-up">
                        Join 500+ contributors making a real difference. Directly support the growth 
                        of data literacy and open-source tool development across the continent.
                    </p>
                </div>

                <div className="contributor-content-grid">
                    <div className="perks-column">
                        {perks.map((perk, index) => (
                            <div key={index} className="perk-item fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                                <div className="perk-icon-wrapper">
                                    {perk.icon}
                                </div>
                                <div className="perk-text">
                                    <h3 className="perk-title">{perk.title}</h3>
                                    <p className="perk-description">{perk.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-column fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="cta-card">
                            <div className="cta-card-content">
                                <h3>Ready to make an impact?</h3>
                                <p>Whether you're an engineer, designer, or community builder, we have a place for you.</p>
                                <a href="#" className="apply-btn">
                                    Apply to Contribute
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                            <div className="cta-pattern"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributor