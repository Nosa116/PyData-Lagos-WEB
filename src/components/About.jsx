import './About.css'
import ScrollReveal from './ScrollReveal'

const About = () => {
    const p1 = "PyData is an educational program of NumFOCUS, a 501(c)(3) nonprofit organization in the United States. PyData provides a forum for the international community of users and developers of data analysis tools to share ideas and learn from each other."
    
    const p2 = "The global PyData network promotes discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization. PyData communities approach data science using many languages, including (but not limited to) Python, Julia, and R."
    
    const p3 = "PyData Lagos brings together data enthusiasts, researchers, and professionals across various domains to exchange knowledge, share experiences, and explore innovative techniques. Our community is especially passionate about using data science and analytics to address Africa’s unique challenges, while contributing to the global open-source ecosystem."

    return (
        <section className="about">
            {/* Sticker Element */}
            <div className="sticker">
                <span className="sticker-text">Do with</span>
            </div>

            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">About us</h2>
                    <div className="about-description">
                        <ScrollReveal baseOpacity={0.1} blurStrength={10}>
                            {p1}
                        </ScrollReveal>
                        <div style={{ height: '2rem' }}></div>
                        <ScrollReveal baseOpacity={0.1} blurStrength={10}>
                            {p2}
                        </ScrollReveal>
                        <div style={{ height: '2rem' }}></div>
                        <ScrollReveal baseOpacity={0.1} blurStrength={10}>
                            {p3}
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About