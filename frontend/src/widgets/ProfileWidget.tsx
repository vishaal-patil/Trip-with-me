import { GlassCard } from '../components/ui/GlassCard';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { GradientButton } from '../components/ui/GradientButton';
import { MOCK_USER } from '../constants/mockData';
import { MapPin, Plane, Award, Hexagon } from 'lucide-react';

export const ProfileWidget = () => {
    const user = MOCK_USER;

    // Calculate progress to next level
    const progress = (user.xp / user.nextLevelXp) * 100;

    return (
        <div className="w-full h-full flex flex-col gap-6 p-4 md:p-6 pb-24 md:pb-6 overflow-y-auto">
            {/* Header Section */}
            <GlassCard className="relative overflow-hidden p-0 group">
                <div className="h-48 w-full relative">
                    <img
                        src={user.coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="px-6 pb-6 -mt-12 flex flex-col items-center md:items-start md:flex-row gap-4 relative z-10">
                    <Avatar src={user.avatar} size="xl" bordered className="border-4 border-background" />

                    <div className="flex-1 text-center md:text-left pt-2 md:pt-14">
                        <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                        <p className="text-secondary font-medium">{user.handle}</p>

                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-sm text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{user.location}</span>
                        </div>
                    </div>

                    <div className="pt-2 md:pt-14 flex flex-col items-center md:items-end gap-2">
                        <Badge label={user.level} variant="gold" icon={<Award className="w-3 h-3" />} />
                        <div className="text-xs text-secondary">
                            {user.xp} / {user.nextLevelXp} XP to next level
                        </div>
                        <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Countries", value: user.stats.countries, icon: <Plane /> },
                    { label: "Trips", value: user.stats.trips, icon: <MapPin /> },
                    { label: "Hidden Gems", value: user.stats.gems, icon: <Hexagon /> },
                    { label: "Respect", value: user.stats.respect, icon: <Award /> },
                ].map((stat, i) => (
                    <GlassCard key={i} className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                        <div className="text-accent opacity-80 scale-75 md:scale-100">{stat.icon}</div>
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-xs text-secondary uppercase tracking-wider">{stat.label}</span>
                    </GlassCard>
                ))}
            </div>

            {/* Badges Section */}
            <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Earned Badges</h3>
                    <button className="text-xs text-accent hover:underline">View All</button>
                </div>

                <div className="flex flex-wrap gap-3">
                    {user.badges.map((badge) => (
                        //@ts-ignore - variant check
                        <Badge key={badge.id} label={badge.label} variant={badge.variant as any} icon={<span>{badge.icon}</span>} className="px-4 py-2" />
                    ))}
                </div>
            </GlassCard>

            {/* Travel Map Placeholder (Ideally this would be a real map) */}
            <GlassCard className="p-1 flex-1 min-h-[200px] overflow-hidden relative group">
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    alt="World Map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <GradientButton>View Interactive Map</GradientButton>
                </div>
            </GlassCard>
        </div>
    );
};
