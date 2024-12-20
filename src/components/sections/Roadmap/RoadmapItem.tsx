import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MilestoneList } from './MilestoneList';
import { cn } from '@/lib/utils';
import type { Milestone } from '@/lib/types/roadmap';

interface RoadmapItemProps {
  phase: string;
  milestone: Milestone;
  className?: string;
}

const statusStyles = {
  completed: 'bg-green-500/10 text-green-500',
  'in-progress': 'bg-primary/10 text-primary',
  upcoming: 'bg-muted text-muted-foreground',
} as const;

export const RoadmapItem = memo(function RoadmapItem({
  phase,
  milestone,
  className,
}: RoadmapItemProps) {
  return (
    <Card className={cn("p-6 relative overflow-hidden group", className)}>
      <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant="outline" className="text-sm font-medium">
            {phase}
          </Badge>
          <Badge className={cn("text-xs", statusStyles[milestone.status])}>
            {milestone.status.replace('-', ' ')}
          </Badge>
        </div>
        
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold">{milestone.title}</h3>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {milestone.timeline}
            </span>
          </div>
          <MilestoneList objectives={milestone.objectives} />
        </div>
      </div>
    </Card>
  );
});