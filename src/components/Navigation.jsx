import { useState } from 'react'
import './Navigation.css'

const Navigation = ({ scrolled }) => {
    const [activeDropdown, setActiveDropdown] = useState(null)

    const navItems = [
                        {
                            label: 'Home',
                            hasDropdown: true,
                            items: [
                                { label: 'About', href: '#about' },
                                { label: 'Projects', href: '#projects' },
                                { label: 'Events', href: '#meetups' },
                                { label: 'Team', href: '#team' }
                            ]
                        },        {
            label: 'Contribute',
            hasDropdown: true,
            items: [
                { label: 'Speak', href: '#speak' },
                { label: 'Program', href: '#contribute' }
            ]
        },
        { label: 'About Us', href: '#about' },
        { label: 'Contact Us', href: '#contact' }
    ]

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/PyData LagosNG.png" alt="PyData Lagos" className="logo-image" />
                </div>

                <ul className="nav-menu">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="nav-item"
                            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <a href={item.href || '#'} className="nav-link">
                                {item.label}
                                {item.hasDropdown && (
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                        <path d="M6 8L2 4h8L6 8z" />
                                    </svg>
                                )}
                            </a>

                            {item.hasDropdown && activeDropdown === item.label && (
                                <div className="dropdown">
                                    {item.items.map((subItem, subIndex) => (
                                        <a key={subIndex} href={subItem.href} className="dropdown-item">
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="cta-button">
                    Join the Community
                </a>
            </div>
        </nav>
    )
}

export default Navigation
