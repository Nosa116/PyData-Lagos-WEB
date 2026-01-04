import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title fade-in-up">
                    <span className="title-line">GET</span>
                    <span className="title-line">INVOLVED</span>
                </h2>
                <div className="contact-content fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <a href="http://meetup.com/pydata-lagos/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        JOIN OUR MEETUP
                    </a>
                    <div className="contact-info">
                        <p>Local Organizer: Olugbenga Ezekiel</p>
                        <a href="mailto:10gbenga.ezekiel@gmail.com">10gbenga.ezekiel@gmail.com</a>
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
