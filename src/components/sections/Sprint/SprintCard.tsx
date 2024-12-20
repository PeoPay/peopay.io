import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SprintSection } from '@/lib/types/sprint';

interface SprintCardProps extends SprintSection {
  className?: string;
}

export const SprintCard = memo(function SprintCard({
  title,
  description,
  features,
  link,
  className,
}: SprintCardProps) {
  return (
    <Card className={cn("p-6 flex flex-col", className)}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {link && (
        <Button asChild variant="outline" className="mt-auto">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {link.text}
          </a>
        </Button>
      )}
    </Card>
  );
});