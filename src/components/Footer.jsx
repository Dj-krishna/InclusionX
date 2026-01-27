const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#features' },
            { name: 'Services', href: '#services' },
            { name: 'Contact', href: '#contact' },
        ],
        services: [
            { name: 'Web Development', href: '#services' },
            { name: 'Mobile Apps', href: '#services' },
            { name: 'Digital Marketing', href: '#services' },
            { name: 'Consulting', href: '#services' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-gray-950 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2 mb-4">
                            <span className="text-3xl">✦</span>
                            InclusionX
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transforming businesses through innovative technology and strategic digital solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { name: 'Twitter', icon: 'T' },
                                { name: 'LinkedIn', icon: 'L' },
                                { name: 'GitHub', icon: 'G' },
                                { name: 'Instagram', icon: 'I' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={`#${social.name.toLowerCase()}`}
                                    className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.querySelector(link.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.querySelector(link.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white text-sm"
                            />
                            <button
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold text-sm"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} InclusionX. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex gap-6">
                            {footerLinks.legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        </footer>
    );
};

export default Footer;
