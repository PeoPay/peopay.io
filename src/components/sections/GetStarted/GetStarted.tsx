import { memo } from 'react';
import { GetStartedCard } from './GetStartedCard';
import { getStartedData } from './getStartedData';

export const GetStarted = memo(function GetStarted() {
  return (
    <section id="get-started" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started with PeoPay-Core</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to begin your journey with PeoPay-Core
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getStartedData.map((item) => (
            <GetStartedCard
              key={item.title}
              {...item}
              icon={<item.icon className="h-full w-full" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
});