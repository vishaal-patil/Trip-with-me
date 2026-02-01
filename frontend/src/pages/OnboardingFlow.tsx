import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../store/AppContext';
import { GradientButton } from '../components/ui/GradientButton';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowRight, Check, Map, Camera, Coffee, Mountain, Compass } from 'lucide-react';
import { Avatar } from '../components/ui/Avatar';

const steps = [
    { title: "Welcome", desc: "Your journey begins here." },
    { title: "Identity", desc: "Create your traveler profile." },
    { title: "Interests", desc: "What kind of traveler are you?" },
];

const TRAVEL_TYPES = [
    { id: 'adventure', label: "Adventure", icon: Mountain },
    { id: 'foodie', label: "Foodie", icon: Coffee },
    { id: 'culture', label: "Culture", icon: Compass },
    { id: 'photography', label: "Photo", icon: Camera },
    { id: 'nature', label: "Nature", icon: Map },
];

export const OnboardingFlow = () => {
    const { setAppState } = useApp();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({ name: '', handle: '', interests: [] as string[] });

    const nextStep = () => {
        if (currentStep < 2) {
            setCurrentStep(c => c + 1);
        } else {
            // Complete onboarding
            setAppState('APP');
        }
    };

    const toggleInterest = (id: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(id)
                ? prev.interests.filter(i => i !== id)
                : [...prev.interests, id]
        }));
    };

    return (
        <div className="w-full h-screen bg-background flex flex-col items-center justify-center p-4">
            <GlassCard className="w-full max-w-2xl min-h-[500px] flex flex-col relative overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* ProgressBar */}
                <div className="flex justify-between items-center p-8 pb-4">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 relative z-10 w-1/3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500
                             ${i <= currentStep ? 'bg-accent text-black scale-110' : 'bg-white/10 text-gray-500'}`}>
                                {i + 1}
                            </div>
                            <span className={`text-xs uppercase tracking-wider transition-colors duration-300 ${i <= currentStep ? 'text-white' : 'text-gray-600'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                    {/* Progress Line */}
                    <div className="absolute top-[48px] left-[16%] right-[16%] h-[2px] bg-white/5 -z-0">
                        <div
                            className="h-full bg-accent transition-all duration-500 ease-out"
                            style={{ width: `${(currentStep / 2) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <AnimatePresence mode="wait">
                        {currentStep === 0 && (
                            <motion.div
                                key="step0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col items-center"
                            >
                                <h2 className="text-3xl font-bold text-white mb-4">Welcome to Travel With Me</h2>
                                <p className="text-gray-400 mb-8 max-w-md">The ultimate social platform for explorers. Document your trips, discover hidden gems, and build your traveler reputation.</p>
                                <img
                                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2535&auto=format&fit=crop"
                                    className="w-full max-w-xs h-48 object-cover rounded-2xl mb-6 opacity-80"
                                />
                            </motion.div>
                        )}

                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full max-w-sm"
                            >
                                <div className="flex flex-col items-center mb-6">
                                    <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2664&auto=format&fit=crop" size="xl" className="mb-4" />
                                    <button className="text-accent text-sm hover:underline">Upload Photo</button>
                                </div>

                                <div className="space-y-4 text-left">
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wider font-bold ml-1 mb-1 block">Display Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Sarah Jenkins"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wider font-bold ml-1 mb-1 block">Handle</label>
                                        <input
                                            type="text"
                                            placeholder="@sarah_travels"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent"
                                            value={formData.handle}
                                            onChange={e => setFormData({ ...formData, handle: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">What inspires you?</h3>
                                <p className="text-gray-400 mb-8">Select at least 3 interests to personalize your feed.</p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                    {TRAVEL_TYPES.map((type) => {
                                        const isSelected = formData.interests.includes(type.id);
                                        return (
                                            <button
                                                key={type.id}
                                                onClick={() => toggleInterest(type.id)}
                                                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 border
                                                ${isSelected
                                                        ? 'bg-accent text-black border-accent scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                                                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                                                    }`}
                                            >
                                                <type.icon className="w-6 h-6" />
                                                <span className="text-sm font-medium">{type.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="p-8 pt-0 flex justify-end">
                    <GradientButton onClick={nextStep} icon={currentStep === 2 ? Check : ArrowRight} className="min-w-[140px]">
                        {currentStep === 2 ? 'Get Started' : 'Next'}
                    </GradientButton>
                </div>
            </GlassCard>
        </div>
    );
};
