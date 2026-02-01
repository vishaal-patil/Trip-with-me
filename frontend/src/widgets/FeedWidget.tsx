
import { GlassCard } from '../components/ui/GlassCard';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { Heart, Share2, MapPin } from 'lucide-react';
import { FEED_ITEMS } from '../constants/mockData';

export const FeedWidget = () => {
    return (
        <div className="w-full h-full p-4 md:p-6 pb-24 md:pb-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6 sticky top-0 z-20 mix-blend-difference">
                <h2 className="text-2xl font-bold text-white">Your Feed</h2>
                <div className="flex gap-2">
                    <Badge label="Following" variant="solid" className="cursor-pointer" />
                    <Badge label="Trending" variant="outline" className="cursor-pointer" />
                </div>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto">
                {/* Repeating data for demo purposes to fill the grid */}
                {[...FEED_ITEMS, ...FEED_ITEMS, ...FEED_ITEMS].map((item, index) => (
                    <GlassCard key={`${item.id}-${index}`} className="group overflow-hidden p-0 border-white/5 bg-black/40 hover:bg-black/60 flex flex-col h-full">
                        {/* Image Section */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            <div className="absolute top-4 right-4">
                                {item.type === 'gem' ? (
                                    <Badge label="Hidden Gem" variant="gold" icon="💎" />
                                ) : (
                                    <Badge label="Travel Book" variant="outline" icon="📖" />
                                )}
                            </div>
                        </div>

                        {/* Title Section (Flex grow to push footer down) */}
                        <div className="p-4 flex-grow relative">
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <MapPin className="w-3 h-3 text-accent" />
                                <span>{item.location}</span>
                            </div>
                        </div>

                        {/* Content Footer */}
                        <div className="p-4 pt-0 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <Avatar src={item.avatar} size="sm" />
                                <div>
                                    <span className="text-sm font-medium text-white block truncate w-24">{item.user}</span>
                                    <span className="text-xs text-gray-400">{item.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs">{item.likes}</span>
                                </button>
                                {/* Reduced icons for tighter grid */}
                                <button className="hover:text-white transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-8 text-center pb-8">
                <GlassCard className="inline-block px-8 py-4 text-center text-gray-500 border-dashed border-white/10 hover:border-white/20 cursor-pointer">
                    <p>You're all caught up!</p>
                    <button className="text-accent text-sm mt-2 hover:underline">Discover more people</button>
                </GlassCard>
            </div>
        </div>
    );
};
