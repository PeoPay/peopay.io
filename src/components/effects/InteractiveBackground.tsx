import { memo, useEffect, useRef } from 'react';
import { GradientOverlay } from './GradientOverlay';
import { cn } from '@/lib/utils';

interface InteractiveBackgroundProps {
  className?: string;
}

export const InteractiveBackground = memo(function InteractiveBackground({
  className
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = container.getBoundingClientRect();
      
      const x = clientX / width;
      const y = clientY / height;
      
      const hue1 = (x * 60) + 180;
      const hue2 = (y * 60) + 160;
      const saturation = 80 + (y * 15);
      const lightness = 15 + (x * 10);
      
      container.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          hsl(${hue1}, ${saturation}%, ${lightness}%) 0%,
          hsl(${hue2}, ${saturation - 15}%, ${lightness - 4}%) 45%,
          hsl(220, 75%, 6%) 100%
        )
      `;
    };

    const handleMouseLeave = () => {
      container.style.background = `
        radial-gradient(
          circle at 50% 50%,
          hsl(220, 80%, 18%) 0%,
          hsl(220, 75%, 10%) 50%,
          hsl(220, 75%, 6%) 100%
        )
      `;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className={cn(
          "fixed inset-0 transition-all duration-300",
          className
        )}
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              hsl(220, 80%, 15%) 0%,
              hsl(220, 75%, 8%) 50%,
              hsl(220, 75%, 4%) 100%
            )
          `
        }}
      />
      <GradientOverlay />
    </>
  );
});