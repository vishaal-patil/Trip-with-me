import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
    label: string;
    variant?: 'outline' | 'solid' | 'gold';
    className?: string;
    icon?: React.ReactNode;
}

export const Badge = ({ label, variant = 'outline', className, icon }: BadgeProps) => {
    return (
        <div className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
            variant === 'outline' && "border border-white/20 text-white/80 bg-white/5",
            variant === 'solid' && "bg-surface text-primary",
            variant === 'gold' && "bg-gradient-to-r from-yellow-600 to-yellow-400 text-black border-none",
            className
        )}>
            {icon && <span className="w-3 h-3">{icon}</span>}
            {label}
        </div>
    );
};
