import { memo } from 'react';
import { RoadmapMilestone } from './RoadmapMilestone';
import { Badge } from '@/components/ui/badge';
import type { RoadmapPhase as RoadmapPhaseType } from '@/lib/types/roadmap';

interface RoadmapPhaseProps {
  phase: RoadmapPhaseType;
}

export const RoadmapPhase = memo(function RoadmapPhase({ phase }: RoadmapPhaseProps) {
  return (
    <div className="space-y-6">
      <Badge variant="outline" className="text-sm font-medium">
        {phase.phase}
      </Badge>
      
      <div className="space-y-4">
        {phase.milestones.map((milestone) => (
          <RoadmapMilestone
            key={milestone.title}
            milestone={milestone}
          />
        ))}
      </div>
    </div>
  );
});