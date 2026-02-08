import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/brand.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 h-20 flex items-center ${isScrolled
                ? isDark
                    ? 'glass shadow-lg'
                    : 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg'
                : isDark
                    ? 'bg-transparent'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2">
                        <div>
                            <img src={logo} alt="InclusionX Logo" className="h-10 w-auto" />
                        </div>
                        InclusionX
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`transition-colors duration-300 font-medium relative group ${isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-700 hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="btn-primary"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-300 ${isDark
                                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00-5.656 0l-.707.707a1 1 0 00.707 1.707l.707-.707a2 2 0 012.828 0l2.12 2.12a1 1 0 00.707-1.707l-.707-.707.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 0l-.707.707.707-.707a2 2 0 000-2.828zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 18a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-4-2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className={`md:hidden mt-4 rounded-2xl p-6 animate-fade-in transition-colors duration-300 ${isDark
                                ? 'glass'
                                : 'bg-white/80 backdrop-blur-xl border border-gray-200'
                            }`}
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`transition-colors duration-300 font-medium py-2 ${isDark
                                            ? 'text-gray-300 hover:text-white'
                                            : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="btn-primary text-center mt-2"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
