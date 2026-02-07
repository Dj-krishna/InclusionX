import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const VideoShowcase = () => {
    const [mounted, setMounted] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="video" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 glass px-6 py-3 rounded-full">
                        <span className="text-sm font-semibold gradient-text">
                            🎬 See Our Work In Action
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Our Latest Project Demo
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Watch how we transform ideas into reality with innovative solutions and cutting-edge technology
                    </p>
                </div>

                {/* Video Container */}
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className={`glass rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'border border-white/10' : 'border border-gray-300'}`}>
                        <div className="relative w-full bg-black pt-[56.25%]">
                            <video
                                className="absolute inset-0 w-full h-full"
                                controls
                                poster="/demo-video-poster.jpg"
                            >
                                <source src="/demo-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Video Description */}
                <div className={`max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className={`glass p-6 rounded-xl ${isDark ? 'border border-white/10' : 'border border-gray-300'}`}>
                        <div className="text-3xl mb-3">💡</div>
                        <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Innovation
                        </h3>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Creative solutions tailored to your unique business needs
                        </p>
                    </div>

                    <div className={`glass p-6 rounded-xl ${isDark ? 'border border-white/10' : 'border border-gray-300'}`}>
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Performance
                        </h3>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            High-quality deliverables optimized for speed and efficiency
                        </p>
                    </div>

                    <div className={`glass p-6 rounded-xl ${isDark ? 'border border-white/10' : 'border border-gray-300'}`}>
                        <div className="text-3xl mb-3">✅</div>
                        <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Results
                        </h3>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Proven track record of delivering measurable success
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
