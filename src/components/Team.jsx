import './Team.css'

const Team = () => {
    const organizers = [
        {
            name: "Adewale O.",
            role: "Lead Organizer",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Chiamaka N.",
            role: "Program Chair",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Tunde A.",
            role: "Logistics Lead",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Zainab B.",
            role: "Sponsorships",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Kwame M.",
            role: "Technical Lead",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Sade F.",
            role: "Communications",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Emeka J.",
            role: "Volunteer Coord.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Ngozi E.",
            role: "Diversity Lead",
            linkedin: "#",
            twitter: "#"
        }
    ]

    return (
        <section id="team" className="team-section">
            <div className="team-container">
                <div className="team-header">
                    <div className="label fade-in-up">COMMUNITY DRIVEN</div>
                    <h2 className="team-main-title fade-in-up">
                        MEET THE <span className="highlight">ORGANIZING</span> TEAM
                    </h2>
                    <p className="team-tagline fade-in-up">
                        Dedicated volunteers driving data science education and fostering 
                        community connections across Africa.
                    </p>
                </div>

                <div className="team-grid">
                    {organizers.map((member, index) => (
                        <div key={index} className="team-member-card fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                            <div className="member-visual">
                                <div className="member-image-wrapper">
                                    <div className="member-image-placeholder">
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <div className="member-socials">
                                        <a href={member.linkedin} className="social-link" aria-label="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href={member.twitter} className="social-link" aria-label="Twitter">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="team-cta fade-in-up">
                    <div className="cta-text">
                        <h4>WANT TO JOIN THE MISSION?</h4>
                        <p>We are always looking for passionate volunteers to help us grow.</p>
                    </div>
                    <a href="#" className="volunteer-btn">
                        Become a Volunteer
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Team