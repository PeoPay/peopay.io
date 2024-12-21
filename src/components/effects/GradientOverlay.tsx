import { memo } from 'react';
import { cn } from '@/lib/utils';

interface GradientOverlayProps {
  className?: string;
}

export const GradientOverlay = memo(function GradientOverlay({ className }: GradientOverlayProps) {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-primary/10 via-background/5 to-background transition-opacity duration-500",
        className
      )} />
    </>
  );
});