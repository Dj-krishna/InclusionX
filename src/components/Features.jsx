import { useEffect, useRef, useState } from 'react';

const Features = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards([0, 1, 2, 3]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: '🎯',
            title: 'Strategic Approach',
            description: 'We analyze your business goals and craft tailored strategies that align with your vision and drive measurable results.',
        },
        {
            icon: '⚡',
            title: 'Rapid Delivery',
            description: 'Agile methodologies ensure quick turnaround times without compromising on quality or attention to detail.',
        },
        {
            icon: '🔒',
            title: 'Security First',
            description: 'Enterprise-grade security measures protect your data and ensure compliance with industry standards.',
        },
        {
            icon: '🤝',
            title: 'Dedicated Support',
            description: '24/7 customer support and ongoing maintenance to keep your systems running smoothly at all times.',
        },
    ];

    return (
        <section id="features" className="py-20 md:py-32 relative" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Why Choose InclusionX?</h2>
                    <p className="section-subtitle">
                        We bring expertise, innovation, and commitment to every project
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`glass glass-hover rounded-2xl p-6 text-center group transition-all duration-500 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Animated Border */}
                            <div className="mt-4 h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 rounded-full"></div>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="mt-20 max-w-6xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                                    Trusted by Industry Leaders
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Our proven track record speaks for itself. We've helped businesses
                                    across various industries achieve their digital transformation goals
                                    with innovative solutions and exceptional service.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex-1 glass rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">99%</div>
                                        <div className="text-xs text-gray-400 mt-1">Client Satisfaction</div>
                                    </div>
                                    <div className="flex-1 glass rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">24/7</div>
                                        <div className="text-xs text-gray-400 mt-1">Support Available</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'On-Time Delivery', value: '100%' },
                                    { label: 'Code Quality', value: 'A+' },
                                    { label: 'Active Projects', value: '25+' },
                                    { label: 'Tech Stack', value: '50+' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                                        <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
