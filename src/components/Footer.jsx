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
        <footer className="relative border-t border-white/10 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2 mb-4">
                            <span className="text-3xl">✦</span>
                            InclusionX
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Transforming businesses through innovative technology and strategic digital solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                {
                                    name: 'Instagram',
                                    url: 'https://www.instagram.com/inclusionx.tech?igsh=MXkwaGhtdTRteWxvZQ==',
                                    bgColor: 'bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600',
                                    svg: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>
                                },
                                {
                                    name: 'Whatsapp',
                                    url: 'https://wa.me',
                                    bgColor: 'bg-green-500',
                                    svg: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.169-4.989 6.143-4.989 10.464 0 1.762.364 3.477 1.086 5.07L2.707 22.352l5.386-1.542c1.546.792 3.248 1.21 5.022 1.21h.005c5.487 0 9.963-4.476 9.963-9.963 0-2.662-1.035-5.165-2.918-7.05-1.883-1.883-4.388-2.92-7.055-2.92"/></svg>
                                },
                                {
                                    name: 'LinkedIn',
                                    url: 'https://linkedin.com',
                                    bgColor: 'bg-blue-600',
                                    svg: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 ${social.bgColor} text-white shadow-md hover:shadow-lg`}
                                    aria-label={social.name}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
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
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
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
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 dark:text-white text-sm"
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
                <div className="pt-8 border-t border-gray-300 dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                            © {currentYear} InclusionX. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex gap-6">
                            {footerLinks.legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
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
