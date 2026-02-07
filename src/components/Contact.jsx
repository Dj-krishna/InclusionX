import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Form is valid - in a real app, this would send to a backend
            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    message: '',
                });
                setSubmitted(false);
            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to start your project? Let's discuss how we can help you achieve your goals
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Build Something Amazing</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Whether you have a project in mind or just want to chat about possibilities,
                                we're here to help. Fill out the form or reach out directly through any of our channels.
                            </p>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="glass p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email Us</div>
                                        <a href="mailto:inclusionx.co@gmail.com" className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                            inclusionx.co@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="glass p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Call Us</div>
                                        <a href="tel:+1234567890" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            +91 6363045158
                                        </a><br></br>
                                        <a href="tel:+1234567890" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            +91 8328424181
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                {/* <div className="flex items-start gap-4">
                                    <div className="glass p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-pink-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Visit Us</div>
                                        <div className="text-gray-900 dark:text-white">
                                            123 Tech Street, Digital City<br />
                                            Innovation Hub, 12345
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Follow Us</div>
                                <div className="flex gap-4">
                                    {[
                                        {
                                            name: 'instagram',
                                            url: 'https://www.instagram.com/inclusionx.tech?igsh=MXkwaGhtdTRteWxvZQ==',
                                            bgColor: 'bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600',
                                            svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>
                                        },
                                        {
                                            name: 'whatsapp',
                                            url: 'https://wa.me',
                                            bgColor: 'bg-green-500',
                                            svg: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.169-4.989 6.143-4.989 10.464 0 1.762.364 3.477 1.086 5.07L2.707 22.352l5.386-1.542c1.546.792 3.248 1.21 5.022 1.21h.005c5.487 0 9.963-4.476 9.963-9.963 0-2.662-1.035-5.165-2.918-7.05-1.883-1.883-4.388-2.92-7.055-2.92"/></svg>
                                        },
                                        {
                                            name: 'linkedin',
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
                                            className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${social.bgColor} text-white shadow-lg hover:shadow-xl`}
                                            aria-label={social.name}
                                        >
                                            {social.svg}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-3xl p-8">
                        {submitted ? (
                            <div className="text-center py-12 animate-fade-in">
                                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 gradient-text">Thank You!</h3>
                                <p className="text-gray-600 dark:text-gray-400">We've received your message and will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white dark:bg-white/5 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-white/10'
                                            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 dark:text-white`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white dark:bg-white/5 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-white/10'
                                            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 dark:text-white`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white dark:bg-white/5 border ${errors.service ? 'border-red-500' : 'border-gray-300 dark:border-white/10'
                                            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 dark:text-white`}
                                    >
                                        <option value="" className="bg-white dark:bg-gray-900">Select a service</option>
                                        <option value="tech-development" className="bg-white dark:bg-gray-900">Tech Development</option>
                                        <option value="digital-marketing" className="bg-white dark:bg-gray-900">Digital Marketing</option>
                                        <option value="both" className="bg-white dark:bg-gray-900">Both Services</option>
                                        <option value="consultation" className="bg-white dark:bg-gray-900">General Consultation</option>
                                    </select>
                                    {errors.service && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service}</p>}
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 bg-white dark:bg-white/5 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-white/10'
                                            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 dark:text-white resize-none`}
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full btn-primary"
                                >
                                    Send Message
                                    <span className="ml-2">→</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
