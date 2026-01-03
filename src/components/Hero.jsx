import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
                            A COMMUNITY
                        </span>
                        <span className="title-line fade-in-up" style={{ animationDelay: '0.3s' }}>
                            FOR EVERYONE
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
