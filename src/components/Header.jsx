import "./Header.css"
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const sectionIds = ["hero", "about", "project", "serv", "contact"]

function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("hero")
    const navigationInProgress = useRef(false)
    const navigationCleanup = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        if (!("IntersectionObserver" in window) || sections.length === 0) return undefined

        const observer = new IntersectionObserver(() => {
            if (navigationInProgress.current) return

            const activationLine = Math.min(180, window.innerHeight * 0.2)
            const currentSection = sections
                .filter((section) => section.getBoundingClientRect().top <= activationLine)
                .at(-1)

            if (currentSection) setActiveSection(currentSection.id)
        }, {
            rootMargin: "-5% 0px -80% 0px",
            threshold: 0,
        })

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const navigateToSection = (sectionId) => {
        navigationCleanup.current?.()
        setActiveSection(sectionId)
        setMenuOpen(false)
        navigationInProgress.current = true

        let timeoutId
        const removeNavigationListeners = () => {
            window.clearTimeout(timeoutId)
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scrollend", finishNavigation)
            navigationInProgress.current = false
            navigationCleanup.current = null
        }
        const finishNavigation = () => {
            removeNavigationListeners()

            const activationLine = Math.min(180, window.innerHeight * 0.2)
            const currentSection = sectionIds
                .map((id) => document.getElementById(id))
                .filter((section) => section && section.getBoundingClientRect().top <= activationLine)
                .at(-1)

            if (currentSection) setActiveSection(currentSection.id)
        }
        const handleScroll = () => {
            window.clearTimeout(timeoutId)
            timeoutId = window.setTimeout(finishNavigation, 140)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("scrollend", finishNavigation)
        timeoutId = window.setTimeout(finishNavigation, 180)
        navigationCleanup.current = removeNavigationListeners
    }

    useEffect(() => {
        if (!menuOpen) return undefined

        const closeOnEscape = (event) => {
            if (event.key === "Escape") setMenuOpen(false)
        }
        const closeOnDesktop = () => {
            if (window.innerWidth > 900) setMenuOpen(false)
        }

        window.addEventListener("keydown", closeOnEscape)
        window.addEventListener("resize", closeOnDesktop)

        return () => {
            window.removeEventListener("keydown", closeOnEscape)
            window.removeEventListener("resize", closeOnDesktop)
        }
    }, [menuOpen])

    useEffect(() => () => navigationCleanup.current?.(), [])

    return (
        <header className={`header${scrolled ? " scroll" : ""}${menuOpen ? " menu-open" : ""}`}>
            <div className="logo">
                <h1><span>Fahim</span></h1>
            </div>

            <nav className="header-nav" id="primary-navigation" aria-label="Main navigation">
                <ul className="links">
                    <li><a className={activeSection === "hero" ? "active" : undefined} aria-current={activeSection === "hero" ? "location" : undefined} href="#hero" onClick={() => navigateToSection("hero")}>Home</a></li>
                    <li><a className={activeSection === "about" ? "active" : undefined} aria-current={activeSection === "about" ? "location" : undefined} href="#about" onClick={() => navigateToSection("about")}>About</a></li>
                    <li><a className={activeSection === "project" ? "active" : undefined} aria-current={activeSection === "project" ? "location" : undefined} href="#project" onClick={() => navigateToSection("project")}>Projects</a></li>
                    <li><a className={activeSection === "serv" ? "active" : undefined} aria-current={activeSection === "serv" ? "location" : undefined} href="#serv" onClick={() => navigateToSection("serv")}>Services</a></li>
                    <li><a className={activeSection === "contact" ? "active" : undefined} aria-current={activeSection === "contact" ? "location" : undefined} href="#contact" onClick={() => navigateToSection("contact")}>Contact</a></li>
                </ul>

                <ul className="icons">
                    <li><a href="https://github.com/Mohammad-Fahim-04" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/mohammad-fahim-bavan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </nav>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} aria-hidden="true" />
            </button>
        </header>
    )
}

export default Header