import './Footer.css'
import numfocusLogo from '../../Images/numfocusweblogo_orig-1.png'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" className="pydata-footer">
            <div className="footer-glow"></div>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-brand-logos">
                            <img src="/PyData LagosNG.png" alt="PyData Lagos" className="footer-logo" />
                            <div className="powered-by">
                                <span>Powered by</span>
                                <a
                                    href="https://numfocus.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="NumFOCUS"
                                >
                                    <img src={numfocusLogo} alt="NumFOCUS" className="numfocus-logo" />
                                </a>
                            </div>
                        </div>
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
                            <a href="mailto:lagospydata@gmail.com" className="email-link">lagospydata@gmail.com</a>
                            <div className="footer-socials">
                                <a href="https://www.linkedin.com/company/pydata-lagos" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/pydata-lagos" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="https://www.meetup.com/pydata-lagos" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Meetup">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.0003 14.8887c0-2.3168-1.5542-4.1026-3.8346-4.1026-.1451 0-.2898.0163-.4324.0416-1.7431-4.0084-5.3622-6.6213-9.589-6.6213-4.1957 0-7.858 2.5807-9.6277 6.551-.1511-.027-.3058-.043-.4622-.043C-2.2961 10.7144-3.832 12.518-3.832 14.8329c0 2.2154 1.4055 4.0253 3.524 4.316l2.1648.2974c.2647 1.2583.7431 2.4518 1.4086 3.535-1.0772-2.5307-2.352-7.0097-.6653-10.42 1.3934-2.8188 4.29-4.2505 6.3664-5.0113.8833-.3235 1.5492-.486 1.8384-.5433a5.5539 5.5539 0 011.0257-.0956c1.196 0 2.3787.2762 3.4243.799.3094.1549.6053.332.885.5284V8.4024h.9904v2.7984c1.6963 1.9566 2.3653 4.3312 2.0573 6.0963-.1633.935-.6153 1.9338-1.42 2.7662 1.961-.4334 3.232-2.2275 3.232-4.453-.0004-.2423-.0245-.4838-.072-.721zm-6.0717 6.1368c-.0153 0-.03 0-.0456-.0008-1.3857-.042-2.7314-.5824-3.892-1.554-1.7056-1.428-2.6108-3.327-2.8808-4.3218l.89-.6005c.8288 1.6385 2.1614 3.2207 4.1166 4.3468.2713.1565.551.3023.8378.435 1.2592.5833 2.668.7905 4.148.609-.2765.3402-.5916.652-.9395.9284-.663.5257-1.439.8005-2.2345.8Z"/></svg>
                                </a>
                                <a href="https://chat.whatsapp.com/I6AyhQt2m6L5ZKhO8EDJxc" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </a>
                                <a href="https://discord.gg/CjspHbE9xe" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Discord">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20.2 6.5-1.9-2m-12.8.2L3.6 6.8c-.5.5-.8 1.2-.8 2v8.5c0 1.4 1 2.5 2.4 2.7h13.6c1.4-.2 2.4-1.3 2.4-2.7V8.8c0-.8-.3-1.5-.8-2.3z"/><path d="M8 11.5v3M16 11.5v3"/><path d="M7.7 5h8.6"/></svg>
                                </a>
                            </div>
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
