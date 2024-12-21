import { memo } from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './featureData';
import { cn } from '@/lib/utils';

export const Features = memo(function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold mb-4">A Better Way to Send Money</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of financial transactions with our comprehensive suite of features
          </p>
        </div>
        
        <div className={cn(
          "grid gap-8 relative",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          "sm:gap-10 lg:gap-12"
        )}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
});