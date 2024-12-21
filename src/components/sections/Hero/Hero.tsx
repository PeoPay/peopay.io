import { memo } from 'react';
import { HeroButtons } from './HeroButtons';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { useInteractiveColor } from '@/hooks/useInteractiveColor';

export const Hero = memo(function Hero() {
  const { color, handleMouseMove, handleMouseLeave } = useInteractiveColor({
    baseHue: 220,
    baseLightness: 10,
    hueRange: 40,
    saturationRange: 20,
  });

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackground color={color} />
      <div className="container relative mx-auto px-4">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
});