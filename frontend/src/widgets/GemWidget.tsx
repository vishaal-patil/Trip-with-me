
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { Map, Filter, Star } from 'lucide-react';
import { FEED_ITEMS } from '../constants/mockData';

export const GemWidget = () => {
    // Filter only gems from mock data for now, repeating them to fill grid
    const gems = FEED_ITEMS.filter(i => i.type === 'gem').concat(FEED_ITEMS.filter(i => i.type === 'gem')).concat(FEED_ITEMS.filter(i => i.type === 'gem'));

    return (
        <div className="w-full h-full p-4 md:p-6 pb-24 md:pb-6 overflow-y-auto">
            <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-accent flex items-center gap-2">
                            Hidden Gems <span className="text-xl">💎</span>
                        </h2>
                        <p className="text-secondary text-sm">Discover secret spots shared by the community.</p>
                    </div>
                    <GradientButton variant="secondary" icon={Filter} className="!w-10 !h-10 !p-0 rounded-full" />
                </div>

                {/* Categories (Horizontal Scroll) */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {['All', 'Nature', 'Urban', 'Food', 'Culture', 'Adventure'].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${i === 0 ? 'bg-accent text-black font-bold' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Map View Placeholder */}
                <div className="w-full h-48 rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        alt="Map"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Map className="w-8 h-8 text-white mb-2" />
                        <span className="font-bold text-white">View on Map</span>
                    </div>
                </div>

                {/* Gems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gems.map((gem, index) => (
                        <GlassCard key={index} className="p-0 overflow-hidden group border-white/10 hover:border-accent/40">
                            <div className="h-40 w-full relative">
                                <img src={gem.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={gem.title} />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    <span className="text-xs text-white font-bold">4.8</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-white truncate">{gem.title}</h3>
                                <p className="text-xs text-secondary mt-1">{gem.location}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-xs text-accent">By {gem.user}</span>
                                    <button className="text-xs text-white/60 hover:text-white">Save</button>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};
