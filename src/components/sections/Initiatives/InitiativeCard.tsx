import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Initiative } from '@/lib/types/initiatives';

interface InitiativeCardProps extends Initiative {
  className?: string;
}

export const InitiativeCard = memo(function InitiativeCard({
  title,
  description,
  features,
  links,
  className,
}: InitiativeCardProps) {
  return (
    <Card className={cn("p-8 flex flex-col bg-card hover:shadow-lg transition-shadow", className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="flex-grow">
        <h4 className="font-semibold mb-4">Key Features:</h4>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {links && links.length > 0 && (
        <div className="mt-8 space-y-3">
          {links.map((link) => (
            <Button
              key={link.url}
              variant={link.primary ? "default" : "outline"}
              asChild
              className="w-full"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {link.text}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
});