import './About.css'

const About = () => {
    return (
        <section className="about">
            {/* Sticker Element - Positioned absolutely via CSS */}
            <div className="sticker">
                <span className="sticker-text">Do with</span>
            </div>

            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">About us</h2>
                    <p className="about-description">
                        We are going in lower the four thresholds. By finding and educating new political talent, 
                        by strengthening incumbent politicians in their profession, and by building and sharing 
                        knowledge that makes politics more accessible and recognizable.
                    </p>
                </div>

                <div className="programs-grid">
                    {/* Card 1 */}
                    <div className="program-card">
                        <div className="card-label">=Trade work</div>
                        {/* Placeholder for "woman in a striped shirt talking to a man" */}
                        <div className="card-image-placeholder" style={{ backgroundColor: '#a5b4fc' }}></div> 
                    </div>

                    {/* Card 2 */}
                    <div className="program-card">
                        <div className="card-label">
                            Project Apollo
                            {/* Upward arrow icon placeholder */}
                            <span style={{ marginLeft: '0.5rem' }}>↑</span>
                        </div>
                        <div className="external-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                        {/* Placeholder for "two men talking in an office" */}
                        <div className="card-image-placeholder" style={{ backgroundColor: '#818cf8' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About