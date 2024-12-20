import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GetStartedCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export const GetStartedCard = memo(function GetStartedCard({
  title,
  description,
  href,
  icon,
  className,
}: GetStartedCardProps) {
  return (
    <Card className={cn("p-6 hover:shadow-lg transition-shadow", className)}>
      <div className="space-y-4">
        <div className="h-12 w-12 text-primary">
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
        
        <Button asChild className="w-full group">
          <a href={href}>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Card>
  );
});