import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../store/AppContext';
import { GradientButton } from '../components/ui/GradientButton';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export const LoginPage = () => {
    const { setAppState } = useApp();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setAppState('ONBOARDING');
        }, 1500);
    };

    return (
        <div className="w-full h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-30" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md relative z-10"
            >
                <button
                    onClick={() => setAppState('LANDING')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <GlassCard className="p-8 md:p-10 border-white/10 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-gray-400">Enter your credentials to access your passport.</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="group">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                                <input
                                    type="email"
                                    placeholder="nomad@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group mb-4">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <GradientButton type="submit" fullWidth disabled={isLoading}>
                            {isLoading ? 'Authenticating...' : 'Sign In'}
                        </GradientButton>

                        <div className="text-center mt-4">
                            <span className="text-gray-500 text-sm">Don't have an account? </span>
                            <button type="button" className="text-accent text-sm font-medium hover:underline">
                                Create Passport
                            </button>
                        </div>
                    </form>
                </GlassCard>
            </motion.div>
        </div>
    );
};
