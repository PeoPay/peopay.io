import { memo } from 'react';
import { RoadmapPhase } from './RoadmapPhase';
import { ROADMAP } from '@/lib/constants/roadmap';
import { cn } from '@/lib/utils';

export const Roadmap = memo(function Roadmap() {
  return (
    <section id="roadmap" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey towards building an inclusive financial ecosystem
          </p>
        </div>
        
        <div className={cn(
          "grid gap-8 relative",
          "grid-cols-1 lg:grid-cols-2"
        )}>
          {ROADMAP.map((phase, index) => (
            <RoadmapPhase key={phase.phase} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
});