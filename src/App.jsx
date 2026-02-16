import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Speaking from './components/Speaking'
import Contributor from './components/Contributor'
import Team from './components/Team'
import Meetups from './components/Meetups'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app">
            <Navigation scrolled={scrolled} />
            <Hero />
            <About />
            <Speaking />
            <Contributor />
            <Team />
            <Meetups />
            <Community />
            <Footer />
        </div>
    )
}

export default App
