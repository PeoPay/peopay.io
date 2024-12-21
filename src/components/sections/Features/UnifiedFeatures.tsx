import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { features } from './unifiedFeaturesData';
import { cn } from '@/lib/utils';

export const UnifiedFeatures = memo(function UnifiedFeatures() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 relative grid-cols-1 lg:grid-cols-2 animate-fade-in-up">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={cn(
                "group relative p-8 hover:shadow-xl transition-all duration-500",
                "hover:-translate-y-2 overflow-hidden bg-background/80 backdrop-blur-sm",
                "border border-primary/10 hover:border-primary/30",
                index === 0 && "lg:col-span-2"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-75 transition-transform duration-500 group-hover:scale-125" />
                  <feature.icon className="relative h-12 w-12 text-primary mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                
                <h3 className="text-xl font-bold tracking-wide mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
});