
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CircularButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const CircularButton = ({
  icon,
  label,
  onClick,
  size = 'md',
  variant = 'primary',
  className,
}: CircularButtonProps) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-10 w-10 text-sm',
    md: 'h-14 w-14 text-base',
    lg: 'h-20 w-20 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'bg-transparent border border-border text-foreground hover:bg-secondary/50',
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'relative group',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium">
        {label}
      </span>
    </motion.button>
  );
};

export default CircularButton;
