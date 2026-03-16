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
                                    <svg viewBox="0 0 432 432"><path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"/></svg>
                                </a>
                                <a href="https://github.com/pydata-lagos" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                    <svg viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
                                </a>
                                <a href="https://www.meetup.com/pydata-lagos" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Meetup">
                                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.98.555a.518.518 0 0 0-.105.011a.53.53 0 1 0 .222 1.04a.533.533 0 0 0 .409-.633a.531.531 0 0 0-.526-.418zm6.455.638a.984.984 0 0 0-.514.143a.99.99 0 1 0 1.02 1.699a.99.99 0 0 0 .34-1.36a.992.992 0 0 0-.846-.482zm-3.03 2.236a5.029 5.029 0 0 0-4.668 3.248a3.33 3.33 0 0 0-1.46.551a3.374 3.374 0 0 0-.94 4.562a3.634 3.634 0 0 0-.605 4.649a3.603 3.603 0 0 0 2.465 1.597c.018.732.238 1.466.686 2.114a3.9 3.9 0 0 0 5.423.992c.068-.047.12-.106.184-.157c.987.881 2.47 1.026 3.607.24a2.91 2.91 0 0 0 1.162-1.69a4.238 4.238 0 0 0 2.584-.739a4.274 4.274 0 0 0 1.19-5.789a2.466 2.466 0 0 0 .433-3.308a2.448 2.448 0 0 0-1.316-.934a4.436 4.436 0 0 0-.776-2.873a4.467 4.467 0 0 0-5.195-1.656a5.106 5.106 0 0 0-2.773-.807zm-5.603.817a.759.759 0 0 0-.423.135a.758.758 0 1 0 .863 1.248a.757.757 0 0 0 .193-1.055a.758.758 0 0 0-.633-.328zm15.994 2.37a.842.842 0 0 0-.47.151a.845.845 0 1 0 1.175.215a.845.845 0 0 0-.705-.365zm-8.15 1.028c.063 0 .124.005.182.014a.901.901 0 0 1 .45.187c.169.134.273.241.432.393c.24.227.414.089.534.02c.208-.122.369-.219.984-.208c.633.011 1.363.237 1.514 1.317c.168 1.199-1.966 4.289-1.817 5.722c.106 1.01 1.815.299 1.96 1.22c.186 1.198-2.136.753-2.667.493c-.832-.408-1.337-1.34-1.12-2.26c.16-.688 1.7-3.498 1.757-3.93c.059-.44-.177-.476-.324-.484c-.19-.01-.34.081-.526.362c-.169.255-2.082 4.085-2.248 4.398c-.296.56-.67.694-1.044.674c-.548-.029-.798-.32-.72-.848c.047-.31 1.26-3.049 1.323-3.476c.039-.265-.013-.546-.275-.68c-.263-.135-.572.07-.664.227c-.128.215-1.848 4.706-2.032 5.038c-.316.576-.65.76-1.152.784c-1.186.056-2.065-.92-1.678-2.116c.173-.532 1.316-4.571 1.895-5.599c.389-.69 1.468-1.216 2.217-.892c.387.167.925.437 1.084.507c.366.163.759-.277.913-.412c.155-.134.302-.276.49-.357c.142-.06.343-.095.532-.094zm10.88 2.057a.468.468 0 0 0-.093.011a.467.467 0 0 0-.36.555a.47.47 0 0 0 .557.36a.47.47 0 0 0 .36-.557a.47.47 0 0 0-.464-.37zm-22.518.81a.997.997 0 0 0-.832.434a1 1 0 1 0 1.39-.258a1 1 0 0 0-.558-.176zm21.294 2.094a.635.635 0 0 0-.127.013a.627.627 0 0 0-.48.746a.628.628 0 0 0 .746.483a.628.628 0 0 0 .482-.746a.63.63 0 0 0-.621-.496zm-18.24 6.097a.453.453 0 0 0-.092.012a.464.464 0 1 0 .195.908a.464.464 0 0 0 .356-.553a.465.465 0 0 0-.459-.367zm13.675 1.55a1.044 1.044 0 0 0-.583.187a1.047 1.047 0 1 0 1.456.265a1.044 1.044 0 0 0-.873-.451zM11.4 22.154a.643.643 0 0 0-.36.115a.646.646 0 0 0-.164.899a.646.646 0 0 0 .899.164a.646.646 0 0 0 .164-.898a.646.646 0 0 0-.54-.28z"/></svg>
                                </a>
                                <a href="https://chat.whatsapp.com/I6AyhQt2m6L5ZKhO8EDJxc" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                                    <svg viewBox="0 0 432 432"><path fill="currentColor" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"/></svg>
                                </a>
                                <a href="https://discord.gg/CjspHbE9xe" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Discord">
                                    <svg viewBox="0 0 14 14"><g fill="none" stroke="currentColor"><path d="M4.112 6.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m4.5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"/><path strokeLinecap="round" strokeLinejoin="round" d="M.858 9.864c0-2.401.858-5.574 1.715-6.861c0 0 .858-.429 4.289-.429c3.43 0 4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716l-1.51-1.886a6.586 6.586 0 0 1-2.985 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"/><path strokeLinecap="round" strokeLinejoin="round" d="M3.86 9.007c.261.261.81.523 1.509.687a6.586 6.586 0 0 0 2.986 0c.699-.164 1.247-.426 1.509-.687"/></g></svg>
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
