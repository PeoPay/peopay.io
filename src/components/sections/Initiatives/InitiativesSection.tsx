import { memo } from 'react';
import { InitiativeCard } from './InitiativeCard';
import { INITIATIVES } from '@/lib/constants/initiatives';

export const InitiativesSection = memo(function InitiativesSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring innovative solutions to empower decentralized communities through cutting-edge blockchain technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INITIATIVES.map((initiative) => (
            <InitiativeCard key={initiative.title} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
});