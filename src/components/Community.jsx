import './Community.css'

const Community = () => {
    const projects = [
        {
            title: "9JaSafety",
            status: "In Progress",
            statusClass: "in-progress",
            description: "Free and open source safety application for Nigerians - kidnappings, dangerous roads, and crime alerts"
        },
        {
            title: "PyData Lagos Website",
            status: "Done",
            statusClass: "completed",
            description: "The official open-source website for the PyData Lagos community, built with React and Vite."
        },
        {
            title: "Coming Soon",
            status: "Planning",
            statusClass: "planning",
            description: ""
        }
    ]

    return (
        <section id="projects" className="community-section">
            <div className="community-container">
                <div className="community-grid">
                    {/* Left Column: Narrative */}
                    <div className="community-narrative">
                        <div className="label fade-in-up">COMMUNITY IMPACT</div>
                        <h2 className="community-main-title fade-in-up">
                            OPEN SOURCE IN <span className="highlight">ACTION</span>
                        </h2>
                        <p className="community-description fade-in-up">
                            PyData Lagos is committed to solving local problems with global tools. 
                            From visualizing city traffic to preserving languages, explore what our 
                            community is building together.
                        </p>
                        
                        <div className="community-actions fade-in-up">
                            <a href="#" className="primary-btn">
                                Start a Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="community-discord fade-in-up">
                            <p>Want to contribute? <a href="https://chat.whatsapp.com/I6AyhQt2m6L5ZKhO8EDJxc" target="_blank" rel="noopener noreferrer">Join our WhatsApp Community</a></p>
                        </div>
                    </div>

                    {/* Right Column: Project Cards */}
                    <div className="projects-column">
                        <div className="projects-stack">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                                    <div className="project-card-header">
                                        <span className={`status-badge ${project.statusClass}`}>
                                            {project.status}
                                        </span>
                                        <div className="project-arrow">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Languages Tape - Integrated original intent */}
                <div className="languages-tape fade-in-up">
                    <div className="tape-content">
                        <span>PYTHON</span>
                        <div className="dot"></div>
                        <span>JULIA</span>
                        <div className="dot"></div>
                        <span>R</span>
                        <div className="dot"></div>
                        <span>SQL</span>
                        <div className="dot"></div>
                        <span>PANDAS</span>
                        <div className="dot"></div>
                        <span>SCIKIT-LEARN</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community