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
                                        <a href="mailto:info@inclusionx.com" className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                            info@inclusionx.com
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
                                    {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                                        <a
                                            key={social}
                                            href={`#${social}`}
                                            className="glass p-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                                            aria-label={social}
                                        >
                                            <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
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
