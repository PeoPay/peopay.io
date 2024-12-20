import { memo } from 'react';
import { Check } from 'lucide-react';
import type { Milestone } from '@/lib/types/roadmap';

interface MilestoneListProps {
  objectives: Milestone['objectives'];
}

export const MilestoneList = memo(function MilestoneList({ objectives }: MilestoneListProps) {
  return (
    <ul className="space-y-2 mt-4">
      {objectives.map((objective) => (
        <li key={objective} className="flex items-start gap-2">
          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{objective}</span>
        </li>
      ))}
    </ul>
  );
});