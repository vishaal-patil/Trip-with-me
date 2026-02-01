import { type ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
}

export const Avatar = ({
    className,
    size = 'md',
    bordered = false,
    src,
    alt = "User",
    ...props
}: AvatarProps) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-24 h-24",
        xl: "w-32 h-32"
    };

    return (
        <div className={cn(
            "relative rounded-full overflow-hidden bg-surface flex-shrink-0",
            sizeClasses[size],
            bordered && "border-2 border-white/20",
            className
        )}>
            <img
                src={src || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"}
                alt={alt}
                className="w-full h-full object-cover"
                {...props}
            />
        </div>
    );
};
