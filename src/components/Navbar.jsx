"use client"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"

const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState("")
    const [openDropdown, setOpenDropdown] = useState(null)
    const projectsRef = useRef(null)
    const certsRef = useRef(null)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)
    const handleDropdown = (menu) => setOpenDropdown(openDropdown === menu ? null : menu)

    // Highlight menu aktif
    useEffect(() => {
        if (location.pathname === "/") {
            const sections = document.querySelectorAll("section[id]")
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActive(entry.target.id)
                    })
                },
                { threshold: 0.6 }
            )
            sections.forEach((section) => observer.observe(section))
            return () => observer.disconnect()
        } else {
            setActive("")
        }
    }, [location.pathname])

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                projectsRef.current && !projectsRef.current.contains(e.target) &&
                certsRef.current && !certsRef.current.contains(e.target)
            ) setOpenDropdown(null)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const renderDropdown = (menu, ref, items) => (
        <div className="relative flex items-center gap-1" ref={ref}>
            <button
                onClick={() => handleDropdown(menu)}
                className={`flex items-center gap-1 transition ${active === menu ? "text-blue-400" : "text-white hover:text-gray-300"}`}
            >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === menu ? "rotate-180" : ""}`}
                />
            </button>

            {/* Desktop Dropdown */}
            {openDropdown === menu && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-black/90 rounded-md shadow-lg py-2 z-20">
                    {items.map((item) => (
                        <HashLink
                            key={item.href}
                            smooth
                            to={item.href}
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={() => setOpenDropdown(null)}
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>
            )}
        </div>
    )

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-md z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <HashLink smooth to="/#hero" className="text-xl font-bold text-white">
                    MyPortfolio
                </HashLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {links.map((link) => (
                        <HashLink
                            key={link.href}
                            smooth
                            to={`/${link.href}`}
                            className={`transition ${active === link.href.replace("#", "") ? "text-blue-400" : "text-white hover:text-gray-300"}`}
                        >
                            {link.name}
                        </HashLink>
                    ))}

                    {renderDropdown("projects", projectsRef, [{ name: "All Projects", href: "/all-projects" }])}
                    {renderDropdown("certificates", certsRef, [{ name: "All Certificates", href: "/all-certificates" }])}

                    <HashLink
                        smooth
                        to="/#contact"
                        className={`transition ${active === "contact" ? "text-blue-400" : "text-white hover:text-gray-300"}`}
                    >
                        Contact
                    </HashLink>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-md absolute w-full left-0 top-full shadow-lg z-40">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {links.map((link) => (
                            <HashLink
                                key={link.href}
                                smooth
                                to={`/${link.href}`}
                                className="text-white hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </HashLink>
                        ))}

                        {/* Projects Dropdown */}
                        <div className="space-y-1">
                            <button
                                onClick={() => handleDropdown("projects")}
                                className="w-full flex justify-between items-center text-white hover:text-blue-400"
                            >
                                Projects
                                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`} />
                            </button>
                            {openDropdown === "projects" && (
                                <div className="pl-4 flex flex-col space-y-1 mt-1">
                                    <HashLink smooth to="/all-projects" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
                                        All Projects
                                    </HashLink>
                                </div>
                            )}
                        </div>

                        {/* Certificates Dropdown */}
                        <div className="space-y-1">
                            <button
                                onClick={() => handleDropdown("certificates")}
                                className="w-full flex justify-between items-center text-white hover:text-blue-400"
                            >
                                Certificates
                                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "certificates" ? "rotate-180" : ""}`} />
                            </button>
                            {openDropdown === "certificates" && (
                                <div className="pl-4 flex flex-col space-y-1 mt-1">
                                    <HashLink smooth to="/all-certificates" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
                                        All Certificates
                                    </HashLink>
                                </div>
                            )}
                        </div>

                        {/* Contact */}
                        <HashLink smooth to="/#contact" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
                            Contact
                        </HashLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
