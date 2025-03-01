
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard = ({
  title,
  description,
  icon,
  delay = 0,
  className,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6 bg-white border border-border',
        'transition-all duration-300',
        'hover:shadow-xl hover:border-primary/20',
        'relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 blur-2xl" />
      
      {/* Icon */}
      <div className="mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
    </motion.div>
  );
};

export default AnimatedCard;
