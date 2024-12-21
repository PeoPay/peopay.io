import { memo } from 'react';
import { cn } from '@/lib/utils';

interface Orb {
  size: number;
  position: string;
  delay: string;
  blur: string;
}

const orbs: Orb[] = [
  { size: 80, position: '-top-40 -right-40', delay: 'delay-0', blur: 'blur-3xl' },
  { size: 60, position: '-bottom-20 -left-20', delay: 'delay-1000', blur: 'blur-2xl' },
  { size: 40, position: 'top-1/4 right-1/4', delay: 'delay-500', blur: 'blur-xl' },
];

interface HeroBackgroundProps {
  color: string;
}

export const HeroBackground = memo(function HeroBackground({ color }: HeroBackgroundProps) {
  return (
    <>
      <div 
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0">
        <div className={cn(
          "absolute inset-0 bg-grid-white/[0.02]",
          "bg-[size:50px_50px] transition-opacity duration-500",
          "animate-pulse-slow"
        )} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br",
        "from-primary/10 via-background/5 to-background",
        "transition-opacity duration-500"
      )} />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={cn(
              "absolute rounded-full animate-float",
              orb.position,
              orb.delay,
              orb.blur,
              "transition-all duration-1000"
            )}
            style={{
              width: `${orb.size}rem`,
              height: `${orb.size}rem`,
              background: `radial-gradient(circle at center, ${color}, transparent)`,
              opacity: 0.15,
            }}
          />
        ))}
      </div>
    </>
  );
});