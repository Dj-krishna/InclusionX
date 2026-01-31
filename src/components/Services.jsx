import { useEffect, useRef, useState } from 'react';

const Services = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards([0, 1]);
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

    const services = [
        {
            icon: '💻',
            title: 'Tech Development',
            description: 'Custom software solutions tailored to your business needs. From web and mobile applications to enterprise systems.',
            features: [
                'Web & Mobile Apps',
                'Cloud Solutions',
                'API Development',
                'Enterprise Software',
            ],
            gradient: 'from-cyan-500 to-blue-600',
        },
        {
            icon: '📈',
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies that amplify your brand and drive measurable results across all channels.',
            features: [
                'SEO & SEM',
                'Social Media Marketing',
                'Content Strategy',
                'Analytics & Insights',
            ],
            gradient: 'from-purple-500 to-pink-600',
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 relative" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive solutions to power your digital transformation
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`glass glass-hover rounded-3xl p-8 md:p-10 group relative overflow-hidden transition-all duration-500 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Gradient Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>

                            {/* Icon */}
                            <div className="text-6xl mb-6 animate-float">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Effect Border */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">
                            ✨ Why Choose Our Services?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We combine technical excellence with creative innovation to deliver solutions
                            that not only meet but exceed expectations. Our team of experts works closely
                            with you to understand your unique challenges and craft strategies that drive real results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
