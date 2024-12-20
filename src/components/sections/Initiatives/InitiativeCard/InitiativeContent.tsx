import { memo } from 'react';

interface InitiativeContentProps {
  title: string;
  description: string;
}

export const InitiativeContent = memo(function InitiativeContent({
  title,
  description,
}: InitiativeContentProps) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
});