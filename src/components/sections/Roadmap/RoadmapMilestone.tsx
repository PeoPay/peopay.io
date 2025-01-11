import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Hourglass } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Milestone } from '@/lib/types/roadmap';

interface RoadmapMilestoneProps {
  milestone: Milestone;
}

const statusConfig = {
  completed: {
    icon: Check,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  'in-progress': {
    icon: Clock,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  upcoming: {
    icon: Hourglass,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted',
  },
} as const;

export const RoadmapMilestone = memo(function RoadmapMilestone({
  milestone,
}: RoadmapMilestoneProps) {
  const { icon: StatusIcon, color, bgColor } = statusConfig[milestone.status];

  return (
    <Card className={cn(
      "p-6 relative overflow-hidden transition-all duration-500",
      "hover:shadow-xl hover:-translate-y-1 group",
      "border border-primary/10 hover:border-primary/30"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <StatusIcon className={cn("h-5 w-5", color)} />
            <span className="text-sm font-medium">{milestone.timeline}</span>
          </div>
          
          <Badge className={cn("text-xs", color, bgColor)}>
            {milestone.status.replace('-', ' ')}
          </Badge>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
            {milestone.title}
          </h3>
          <ul className="space-y-2">
            {milestone.objectives.map((objective) => (
              <li 
                key={objective}
                className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
              >
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary/60" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
});