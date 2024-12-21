import { memo } from 'react';
import { COMPANY } from '@/lib/constants/company';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

export const HeroContent = memo(function HeroContent() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={cn(
        "text-center transition-all duration-1000 transform",
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
    >
      <h1 className={cn(
        "text-4xl md:text-7xl font-bold mb-6",
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-primary via-primary/80 to-primary/60",
        "transition-all duration-500",
        "hover:scale-[1.02] hover:bg-gradient-to-br"
      )}>
        {COMPANY.tagline}
      </h1>
      
      <p className={cn(
        "text-xl text-muted-foreground max-w-2xl mx-auto mb-12",
        "leading-relaxed transition-all duration-500",
        "hover:text-foreground hover:scale-[1.02]"
      )}>
        {COMPANY.mission}
      </p>
    </div>
  );
});