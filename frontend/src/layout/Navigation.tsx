import React from 'react';
import { useWidget, type WidgetType } from '../store/WidgetContext';
import { Home, User, BookOpen, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navigation = () => {
    const { activeWidget, setActiveWidget } = useWidget();

    const navItems: { id: WidgetType; icon: React.ElementType; label: string }[] = [
        { id: 'HOME', icon: Home, label: 'Home' },
        { id: 'PROFILE', icon: User, label: 'Profile' },
        { id: 'GEMS', icon: Compass, label: 'Gems' },
        { id: 'BOOK', icon: BookOpen, label: 'My Book' },
    ];

    return (
        <div className="z-50 fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto">
            <div className="flex md:flex-col items-center gap-2 p-2 rounded-full bg-glass border border-glass-border shadow-2xl backdrop-blur-xl">
                {navItems.map((item) => {
                    const isActive = activeWidget === item.id;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveWidget(item.id)}
                            className={cn(
                                "relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                                isActive ? "bg-white text-black scale-110 shadow-lg" : "text-white/60 hover:text-white hover:bg-white/10"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="absolute left-14 bg-black/80 px-2 py-1 rounded text-xs text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none hidden md:block">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
