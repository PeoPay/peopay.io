import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
}

export const ResourceCard = memo(function ResourceCard({
  icon: Icon,
  title,
  description,
  isActive,
}: ResourceCardProps) {
  return (
    <Card className={cn(
      "p-6 transition-all duration-300",
      isActive && "ring-2 ring-primary shadow-lg"
    )}>
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
});