import { memo } from 'react';
import { RoadmapItem } from './RoadmapItem';
import { ROADMAP } from '@/lib/constants/roadmap';

export const Roadmap = memo(function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey towards building an inclusive financial ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ROADMAP.map((phase) => (
            phase.milestones.map((milestone) => (
              <RoadmapItem
                key={`${phase.phase}-${milestone.title}`}
                phase={phase.phase}
                milestone={milestone}
              />
            ))
          ))}
        </div>
      </div>
    </section>
  );
});