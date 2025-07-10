"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header: React.FC = () => {
    const { isAuthenticated, user, logout } = useAuth()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogout = () => {
        logout()
        setIsMenuOpen(false)
    }

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/skills", label: "Skills" },
        { path: "/contact", label: "Contact" },
        { path: "/admin", label: "Admin" },
    ]

    return (
        <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">
                        My Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex space-x-6">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`hover:text-blue-200 transition-colors ${location.pathname === item.path ? "font-semibold underline" : ""}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Auth Section */}
                        <div className="flex items-center space-x-4 border-l border-blue-500 pl-6">
                            {isAuthenticated ? (
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm">
                                        Welcome, <span className="font-semibold">{user?.username}</span>
                                        {user?.role === "admin" && (
                                            <span className="ml-1 px-2 py-1 bg-blue-500 text-xs rounded-full">Admin</span>
                                        )}
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex space-x-2">
                                    <Link
                                        to="/login"
                                        className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="border border-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-sm transition-colors"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-blue-600 z-40 mt-16 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="container mx-auto px-4 py-6">
                            <ul className="flex flex-col space-y-6">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            className={`block py-2 text-lg transition-colors ${location.pathname === item.path
                                                ? "font-semibold underline"
                                                : "hover:text-blue-200"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Auth Section */}
                            <div className="mt-8 pt-6 border-t border-blue-500">
                                {isAuthenticated ? (
                                    <div className="flex flex-col space-y-4">
                                        <div className="text-sm">
                                            <span>Welcome, </span>
                                            <span className="font-semibold">{user?.username}</span>
                                            {user?.role === "admin" && (
                                                <span className="ml-2 px-2 py-1 bg-blue-500 text-xs rounded-full">Admin</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded text-sm transition-colors w-full"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-3">
                                        <Link
                                            to="/login"
                                            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded text-sm transition-colors text-center"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/register"
                                            className="border border-blue-400 hover:bg-blue-500 px-4 py-2 rounded text-sm transition-colors text-center"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header