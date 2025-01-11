import { memo } from 'react';
import { TimelineEvent } from './TimelineEvent';
import { MILESTONES } from '@/lib/constants/milestones';
import { cn } from '@/lib/utils';

export const Timeline = memo(function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
      
      {/* Events */}
      <div className="space-y-24">
        {MILESTONES.map((milestone, index) => (
          <TimelineEvent
            key={milestone.date}
            milestone={milestone}
            className={cn(
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
});