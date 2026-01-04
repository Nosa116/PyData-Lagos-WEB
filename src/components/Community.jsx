import './Community.css'

const Community = () => {
    const languages = ['PYTHON', 'JULIA', 'R']

    return (
        <section className="community">
            <div className="community-container">
                <h2 className="community-title fade-in-up">
                    <span className="title-line">OUR</span>
                    <span className="title-line">COMMUNITY</span>
                </h2>
                <div className="languages fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {languages.map((lang, index) => (
                        <div key={lang} className="language-item" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                            {lang}
                        </div>
                    ))}
                </div>
                <p className="community-text fade-in-up" style={{ animationDelay: '0.6s' }}>
                    We approach data science using many languages and tools, promoting discussion of best practices, new approaches, and emerging technologies.
                </p>
            </div>
        </section>
    )
}

export default Community
