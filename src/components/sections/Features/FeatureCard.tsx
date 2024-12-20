import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description
}: FeatureCardProps) {
  return (
    <Card className="group relative p-4 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:text-primary mb-3 sm:mb-4">
          <Icon className="h-12 w-12" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
        
        <Button variant="ghost" className="mt-3 sm:mt-4 group/btn w-full" asChild>
          <a 
            href="https://peopay.github.io/PeoPay-Docs/User_Guides/FAQs.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </Button>
      </div>
    </Card>
  );
}