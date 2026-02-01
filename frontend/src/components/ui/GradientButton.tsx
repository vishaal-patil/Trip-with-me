import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { type LucideIcon } from 'lucide-react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: LucideIcon;
    fullWidth?: boolean;
}

export const GradientButton = ({
    className,
    children,
    variant = 'primary',
    icon: Icon,
    fullWidth = false,
    ...props
}: GradientButtonProps) => {
    return (
        <button
            className={cn(
                "relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variant === 'primary' && "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                variant === 'secondary' && "bg-white/10 text-white hover:bg-white/20 border border-white/10",
                variant === 'ghost' && "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {Icon && <Icon className="w-4 h-4" />}
            {children}
        </button>
    );
};
