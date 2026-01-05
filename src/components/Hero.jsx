import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const words = ["Data Engineers.", "ML Engineers.", "Data Analysts.", "Everyone."]

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length
            const fullText = words[i]

            setText(current => isDeleting 
                ? fullText.substring(0, current.length - 1) 
                : fullText.substring(0, current.length + 1)
            )

            if (!isDeleting && text === fullText) {
                setIsDeleting(true)
                setTypingSpeed(1500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(500)
            } else {
                setTypingSpeed(isDeleting ? 50 : 150)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 10,
                y: (e.clientY / window.innerHeight - 0.5) * 10
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-line fade-in-up" style={{ animationDelay: '0.1s' }}>
                            A COMMUNITY FOR
                        </span>
                        <span className="title-line fade-in-up" style={{ animationDelay: '0.3s' }}>
                            {text}
                        </span>
                    </h1>
                </div>

                <div className="hero-illustration slide-in-right">
                    <div
                        className="rocket-container"
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                        }}
                    >
                        <img src="/Launch.png" alt="Launch Illustration" className="launch-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
