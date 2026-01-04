import './About.css'

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title fade-in-up">
                        <span className="title-line">WHAT IS</span>
                        <span className="title-line">PYDATA?</span>
                    </h2>
                    <div className="about-text fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <p>PyData is an educational program of NumFOCUS, a 501(c)(3) nonprofit organization. We provide a forum for the international community of users and developers of data analysis tools.</p>
                        <p>PyData Lagos brings together data enthusiasts, researchers, and professionals to exchange knowledge and explore innovative techniques. We're passionate about using data science to address Africa's unique challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
