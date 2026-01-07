import { useEffect, useState } from 'react'
import './Hero.css'
import SplitText from './SplitText'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [currentIndex, setCurrentIndex] = useState(0)

    const words = ["Data Engineers.", "ML Engineers.", "Data Analysts.", "Everyone."]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

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
                        <div className="title-line fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <SplitText
                                key={words[currentIndex]}
                                text={words[currentIndex]}
                                className="split-text-custom"
                                delay={50}
                                duration={1}
                                splitType="chars,words"
                                tag="span"
                            />
                        </div>
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