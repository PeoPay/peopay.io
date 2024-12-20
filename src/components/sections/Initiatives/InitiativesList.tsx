import { memo } from 'react';
import { InitiativeCard } from './InitiativeCard';
import { INITIATIVES } from '@/lib/constants/initiatives';

export const InitiativesList = memo(function InitiativesList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {INITIATIVES.map((initiative) => (
        <InitiativeCard key={initiative.title} {...initiative} />
      ))}
    </div>
  );
});