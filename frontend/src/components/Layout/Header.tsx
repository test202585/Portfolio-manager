import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/skills", label: "Skills" },
        { path: "/contact", label: "Contact" },
        { path: "/admin", label: "Admin" },
    ];

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary-600">
                        Portfolio Manager
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`transition-colors duration-200 ${location.pathname === item.path
                                        ? "text-primary-600 font-semibold"
                                        : "text-gray-600 hover:text-primary-500"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

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
                <div
                    className={`fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out md:hidden
                        ${isMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0 pointer-events-none"
                        }`}
                    style={{ top: "4.5rem" }} // Starts below the header
                >
                    <ul className="flex flex-col px-4 pt-8 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`block py-3 text-xl transition-colors duration-200 ${location.pathname === item.path
                                        ? "text-primary-600 font-semibold border-l-4 border-primary-600 pl-4"
                                        : "text-gray-600 hover:text-primary-500 pl-5"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;