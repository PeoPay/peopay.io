import { memo } from 'react';

interface NumberedStepProps {
  number: number;
  content: string;
}

export const NumberedStep = memo(function NumberedStep({
  number,
  content
}: NumberedStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        {number}
      </div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
});