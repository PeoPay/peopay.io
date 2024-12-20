import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SolutionCard = memo(function SolutionCard({
  icon: Icon,
  title,
  description,
}: SolutionCardProps) {
  return (
    <Card className="group relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
          <Icon className="h-12 w-12" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
});