import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NumberedStep } from '@/components/ui/numbered-step';
import { ArrowRight, Clock } from 'lucide-react';
import { resources } from './educationData';

interface ResourceContentProps {
  resourceId: string;
}

export const ResourceContent = memo(function ResourceContent({
  resourceId,
}: ResourceContentProps) {
  const resource = resources.find(r => r.id === resourceId);
  if (!resource) return null;

  return (
    <Card className="p-6 h-full">
      <div className="prose prose-neutral dark:prose-invert">
        <h3 className="text-2xl font-bold mb-4">{resource.contentTitle}</h3>
        <div className="space-y-4">
          {resource.content.map((content, index) => (
            <NumberedStep
              key={index}
              number={index + 1}
              content={content}
            />
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
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
});