import { memo } from 'react';
import { SolutionCard } from './SolutionCard';
import { solutions } from './solutionData';

export const Solution = memo(function Solution() {
  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">A better way to send money</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of financial transactions with our comprehensive suite of features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
});