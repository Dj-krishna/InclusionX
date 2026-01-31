import { useEffect, useState } from 'react';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient opacity-20"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                <div className="particle w-64 h-64 top-20 left-10 opacity-30" style={{ animationDelay: '0s' }}></div>
                <div className="particle w-96 h-96 top-40 right-20 opacity-20" style={{ animationDelay: '2s' }}></div>
                <div className="particle w-72 h-72 bottom-20 left-1/3 opacity-25" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Badge */}
                    <div className="inline-block mb-6 glass px-6 py-3 rounded-full animate-fade-in">
                        <span className="text-sm font-semibold gradient-text">
                            ✨ Transform Your Business With Technology
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        Elevate Your
                        <span className="block gradient-text mt-2">Digital Presence</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We deliver cutting-edge <span className="text-cyan-600 dark:text-cyan-400 font-semibold">tech development</span> and
                        <span className="text-purple-600 dark:text-purple-400 font-semibold"> marketing solutions</span> that drive growth and innovation for your business.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="btn-primary group"
                        >
                            Start Your Project
                            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-secondary group"
                        >
                            Explore Services
                            <span className="inline-block ml-2 transition-transform group-hover:translate-y-1">↓</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5+</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#services" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
