import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="contact-title fade-in-up">
                    <span className="title-line">GET</span>
                    <span className="title-line">INVOLVED</span>
                </h2>
                <div className="contact-content fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="contact-info">
                        <p>Local Organizer: Olugbenga Ezekiel</p>
                        <a href="mailto:lagospydata@gmail.com">lagospydata@gmail.com</a>
                    </div>
                    <div className="contact-footer">
                        <a href="https://pydata.org/code-of-conduct/" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
                        <span>•</span>
                        <span>Part of NumFOCUS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
