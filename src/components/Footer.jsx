import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" className="pydata-footer">
            <div className="footer-glow"></div>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/PyData LagosNG.png" alt="PyData Lagos" className="footer-logo" />
                        <h2>PYDATA LAGOS</h2>
                        <p>
                            Building an open, practical, and globally connected data science community across Africa.
                        </p>
                        <a
                            href="https://www.meetup.com/pydata-lagos/join/"
                            className="footer-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join the Community
                        </a>
                    </div>

                    <div className="footer-nav-grid">
                        <div className="footer-nav-group">
                            <h3>Explore</h3>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#meetups">Meetups</a>
                            <a href="#team">Team</a>
                        </div>

                        <div className="footer-nav-group">
                            <h3>Get Involved</h3>
                            <a href="#speak">Speak at PyData</a>
                            <a href="#contribute">Contribute</a>
                            <a href="https://pydata.org/volunteer/" target="_blank" rel="noopener noreferrer">Volunteer</a>
                            <a href="https://pydata.org/sponsor-pydata/" target="_blank" rel="noopener noreferrer">Partner With Us</a>
                        </div>

                        <div className="footer-nav-group">
                            <h3>Connect</h3>
                            <a href="mailto:10gbenga.ezekiel@gmail.com">10gbenga.ezekiel@gmail.com</a>
                            <a href="https://www.linkedin.com/company/pydata-lagos" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/pydata-lagos" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.meetup.com/pydata-lagos" target="_blank" rel="noopener noreferrer">Meetup</a>
                            <a href="https://chat.whatsapp.com/I6AyhQt2m6L5ZKhO8EDJxc" target="_blank" rel="noopener noreferrer">WhatsApp Community</a>
                            <a href="https://discord.gg/CjspHbE9xe" target="_blank" rel="noopener noreferrer">Discord</a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>© {year} PyData Lagos. A NumFOCUS Community.</p>
                    <div className="footer-meta-links">
                        <a href="https://pydata.org/code-of-conduct/" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
                        <a href="https://www.numfocus.org/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>
                        <a href="https://www.meetup.com/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
