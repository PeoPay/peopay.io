import { memo, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const OpeningEffect = memo(function OpeningEffect() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "fixed inset-0 z-50 pointer-events-none",
      "transition-transform duration-1000 ease-in-out",
      isOpen ? "translate-y-full" : "translate-y-0"
    )}>
      <div className="absolute inset-0 bg-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse-slow" />
      
      <div className={cn(
        "absolute inset-0 flex items-center justify-center",
        "transition-opacity duration-700",
        isOpen ? "opacity-0" : "opacity-100"
      )}>
        <div className="text-4xl font-bold text-primary animate-pulse">
          Initializing...
        </div>
      </div>
    </div>
  );
});