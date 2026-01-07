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
                    <div className="about-description">
                        <p style={{ marginBottom: '1.5rem' }}>
                            PyData is an educational program of NumFOCUS, a 501(c)(3) nonprofit organization in the United States. PyData provides a forum for the international community of users and developers of data analysis tools to share ideas and learn from each other. The global PyData network promotes discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization. PyData communities approach data science using many languages, including (but not limited to) Python, Julia, and R.
                        </p>
                        <p>
                            PyData Lagos brings together data enthusiasts, researchers, and professionals across various domains to exchange knowledge, share experiences, and explore innovative techniques. Our community is especially passionate about using data science and analytics to address Africa’s unique challenges, while contributing to the global open-source ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
