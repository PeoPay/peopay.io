import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      "p-6 relative overflow-hidden transition-all duration-500",
      "hover:shadow-xl hover:-translate-y-1 group",
      "border border-primary/10 hover:border-primary/30",
      isActive && "ring-1 ring-primary shadow-lg"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative space-y-4">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-75 transition-transform duration-500 group-hover:scale-125" />
          <Icon className="relative h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
        </div>
        
        <h3 className="text-xl font-bold tracking-wide group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {isActive && (
          <Badge 
            variant="outline" 
            className="absolute top-4 right-4 bg-primary/10"
          >
            Active
          </Badge>
        )}
      </div>
    </Card>
  );
});