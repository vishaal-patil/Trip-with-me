import { motion } from 'framer-motion';
import { useApp } from '../store/AppContext';
import { GradientButton } from '../components/ui/GradientButton';
import { Plane, Map, Compass, ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const LandingPage = () => {
    const { setAppState } = useApp();

    return (
        <div className="relative w-full h-screen overflow-hidden bg-background flex flex-col items-center justify-center">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-40"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                            <Plane className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-xl font-bold tracking-widest uppercase text-white/80">Travel With Me</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Your Journey, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                            Documented.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A social platform for travelers to build credibility, discover hidden gems, and preserve memories like never before.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <GradientButton
                            onClick={() => setAppState('LOGIN')}
                            className="!text-lg !px-8 !py-4 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                            icon={ArrowRight}
                        >
                            Start Your Journey
                        </GradientButton>
                        <GradientButton
                            variant="secondary"
                            onClick={() => { }}
                            className="!text-lg !px-8 !py-4 backdrop-blur-md"
                        >
                            Explore Features
                        </GradientButton>
                    </div>
                </motion.div>

                {/* Floating Features Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                >
                    {[
                        { icon: Map, title: "Interactive Maps", desc: "Visualize your entire travel history." },
                        { icon: Compass, title: "Hidden Gems", desc: "Find secret spots shared by locals." },
                        { icon: Plane, title: "Travel Passport", desc: "Build your traveler identity & stats." },
                    ].map((feature, i) => (
                        <GlassCard key={i} className="p-6 text-left hover:bg-white/10 transition-colors">
                            <feature.icon className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
