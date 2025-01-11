import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Milestone } from '@/lib/types/milestones';

interface TimelineEventProps {
  milestone: Milestone;
  className?: string;
  style?: React.CSSProperties;
}

export const TimelineEvent = memo(function TimelineEvent({
  milestone,
  className,
  style
}: TimelineEventProps) {
  return (
    <div 
      className={cn("flex items-center gap-8", className)}
      style={style}
    >
      {/* Content */}
      <div className="flex-1">
        <Card className="p-6 hover:shadow-xl transition-all duration-500 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <Badge variant="outline" className="text-sm font-medium">
                {milestone.date}
              </Badge>
              <Badge 
                className={cn(
                  "text-xs",
                  milestone.status === 'completed' && "bg-green-500/10 text-green-500",
                  milestone.status === 'in-progress' && "bg-primary/10 text-primary",
                  milestone.status === 'upcoming' && "bg-muted text-muted-foreground"
                )}
              >
                {milestone.status}
              </Badge>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {milestone.title}
              </h3>
              <p className="text-muted-foreground">
                {milestone.description}
              </p>
            </div>

            {milestone.achievements && (
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {milestone.achievements.map((achievement) => (
                    <li 
                      key={achievement}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary/60" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Timeline Node */}
      <div className="hidden lg:flex items-center justify-center w-8">
        <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 relative">
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
});