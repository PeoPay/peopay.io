import { memo } from 'react';
import { InitiativeContent } from './InitiativeContent';
import { InitiativeFeatures } from './InitiativeFeatures';
import { InitiativeLinks } from './InitiativeLinks';
import { Card } from '@/components/ui/card';
import type { Initiative } from '@/lib/types/initiatives';

interface InitiativeCardProps extends Initiative {}

export const InitiativeCard = memo(function InitiativeCard({
  title,
  description,
  features,
  links,
}: InitiativeCardProps) {
  return (
    <Card className="p-8 flex flex-col bg-card hover:shadow-lg transition-shadow">
      <InitiativeContent title={title} description={description} />
      <InitiativeFeatures features={features} />
      {links && <InitiativeLinks links={links} />}
    </Card>
  );
});