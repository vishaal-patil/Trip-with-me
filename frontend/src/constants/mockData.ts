export const MOCK_USER = {
    name: "Vishal Patil",
    handle: "@vishaal_explorer",
    level: "Explorer",
    xp: 1250,
    nextLevelXp: 2000,
    location: "Mumbai, India",
    stats: {
        countries: 12,
        trips: 28,
        gems: 8,
        respect: 1250
    },
    badges: [
        { id: 1, label: "Globetrotter", icon: "🌍", variant: "gold" },
        { id: 2, label: "Gem Hunter", icon: "💎", variant: "outline" },
        { id: 3, label: "Storyteller", icon: "✍️", variant: "outline" },
    ],
    coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
};

export const FEED_ITEMS = [
    {
        id: 1,
        type: 'trip',
        title: "Backpacking through Vietnam",
        user: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2670&auto=format&fit=crop",
        likes: 342,
        location: "Ha Giang Loop, Vietnam",
        date: "2 days ago"
    },
    {
        id: 2,
        type: 'gem',
        title: "Secret Waterfall in Bali",
        user: "Jake Dao",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2670&auto=format&fit=crop",
        likes: 856,
        location: "Bali, Indonesia",
        date: "5 days ago",
        isGem: true
    }
];
