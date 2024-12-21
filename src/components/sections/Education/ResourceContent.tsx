import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import { resources } from './educationData';
import { cn } from '@/lib/utils';

interface ResourceContentProps {
  resourceId: string;
}

export const ResourceContent = memo(function ResourceContent({
  resourceId,
}: ResourceContentProps) {
  const resource = resources.find(r => r.id === resourceId);
  if (!resource) return null;

  return (
    <Card className={cn(
      "p-6 h-full relative overflow-hidden transition-all duration-500",
      "hover:shadow-xl group border border-primary/10 hover:border-primary/30"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative space-y-6">
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
          {resource.contentTitle}
        </h3>
        
        <div className="space-y-4 mb-6">
          {resource.content.map((content, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg transition-all duration-300",
                "bg-primary/5 hover:bg-primary/10"
              )}
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {content}
              </span>
            </div>
          ))}
        </div>
        
        {resource.link && (
          <Button className="mt-6 group" asChild>
            {resource.id === 'video-tutorials' ? (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 animate-pulse" />
                <span>Coming Soon</span>
              </div>
            ) : (
              <a
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 group/link"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
});