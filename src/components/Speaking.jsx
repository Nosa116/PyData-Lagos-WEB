import './Speaking.css'

const Speaking = () => {
    const topics = [
        {
            title: "NLP & LLMs",
            description: "Deep learning, Large Language Models, and text analysis applications.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 9h8" /><path d="M8 13h6" />
                </svg>
            )
        },
        {
            title: "Computer Vision",
            description: "Image recognition, object detection, and generative vision models.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            title: "Data Engineering",
            description: "Pipelines, orchestration, scalability, and cloud infrastructure.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        },
        {
            title: "MLOps",
            description: "Model deployment, monitoring, and lifecycle management.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" />
                </svg>
            )
        },
        {
            title: "Data Ethics",
            description: "Responsible AI, bias mitigation, and privacy frameworks.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
            )
        },
        {
            title: "Open Source",
            description: "Building libraries, community management, and documentation.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
            )
        }
    ]

    return (
        <section id="speak" className="speaking-section">
            <div className="speaking-container">
                <div className="speaking-grid">
                    {/* Left side: Content and CTA */}
                    <div className="speaking-content-box">
                        <div className="label fade-in-up">CALL FOR SPEAKERS</div>
                        <h2 className="speaking-main-title fade-in-up">
                            SHARE YOUR <span className="highlight">KNOWLEDGE</span> WITH THE COMMUNITY
                        </h2>
                        <p className="speaking-description fade-in-up">
                            Speaking at PyData Lagos is a powerful way to contribute to the open-source ecosystem. 
                            Whether you're a seasoned researcher or a hobbyist developer, we want to hear your story.
                        </p>
                        
                        <div className="speaking-actions fade-in-up">
                            <a href="#" className="primary-btn">
                                Submit a Proposal
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                            <a href="#" className="secondary-btn">
                                Speaker Guidelines
                            </a>
                        </div>

                        <div className="speaking-stats fade-in-up">
                            <div className="stat-item">
                                <span className="stat-value">20+</span>
                                <span className="stat-label">Meetups Hosted</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">100+</span>
                                <span className="stat-label">Speakers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Topic Cards */}
                    <div className="speaking-topics-grid">
                        <div className="decorative-cube">
                            <img src="/cube.png" alt="" />
                        </div>
                        {topics.map((topic, index) => (
                            <div key={index} className="topic-card fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                <div className="topic-icon-box">
                                    {topic.icon}
                                </div>
                                <h3 className="topic-title">{topic.title}</h3>
                                <p className="topic-desc">{topic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speaking