import { memo } from 'react';
import { HeroButtons } from './HeroButtons';
import { COMPANY } from '@/lib/constants/company';

export const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
          {COMPANY.tagline}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {COMPANY.mission}
          </p>
          <HeroButtons />
        </div>
      </div>
    </section>
  );
});