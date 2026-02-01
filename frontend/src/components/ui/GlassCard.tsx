import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

// Helper for tailwind-merge if not already created, I will create lib/utils next if needed, 
// but for now I'll inline a simple merge or assume I create it.
// Actually proper way is to create utils first. I will assume I will create utils next.

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'dark' | 'light';
    isInteractive?: boolean;
}

export const GlassCard = ({
    className,
    children,
    variant = 'default',
    isInteractive = false,
    ...props
}: GlassCardProps) => {
    return (
        <div
            className={cn(
                "rounded-2xl border border-glass-border backdrop-blur-md transition-all duration-300",
                variant === 'default' && "bg-glass/80",
                variant === 'dark' && "bg-black/60",
                variant === 'light' && "bg-white/10",
                isInteractive && "hover:bg-glass hover:scale-[1.01] hover:shadow-lg cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
