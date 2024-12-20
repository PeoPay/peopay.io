import { memo } from 'react';
import { SprintCard } from './SprintCard';
import { SPRINT_SECTIONS } from '@/lib/constants/sprint';

export const Sprint = memo(function Sprint() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring innovative solutions to empower decentralized communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SPRINT_SECTIONS.map((section) => (
            <SprintCard key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
});