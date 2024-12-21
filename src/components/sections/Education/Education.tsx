import { memo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resources } from './educationData';
import { ResourceCard } from './ResourceCard';
import { ResourceContent } from './ResourceContent';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

export const Education = memo(function Education() {
  const [activeResource, setActiveResource] = useState(resources[0].id);
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div 
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-all duration-1000 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Education Hub
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Access resources and training to maximize your experience with PeoPay-Core.
          </p>
        </div>
        
        <Tabs defaultValue={activeResource} onValueChange={setActiveResource}>
          <TabsList className={cn(
            "w-full max-w-md mx-auto mb-12",
            "grid grid-cols-3 h-14 items-center",
            "bg-background/80 shadow-lg rounded-full p-1 backdrop-blur-sm border border-primary/10"
          )}>
            {resources.map((resource) => (
              <TabsTrigger
                key={resource.id}
                value={resource.id}
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:shadow-lg",
                  "data-[state=active]:text-primary-foreground",
                  "rounded-full h-12 transition-all duration-300",
                  "hover:bg-primary/10 hover:scale-105"
                )}
              >
                <resource.icon className="h-5 w-5 mr-2" />
                <span>
                  {resource.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource) => (
              <TabsContent key={resource.id} value={resource.id}>
                <ResourceCard
                  icon={resource.icon}
                  title={resource.title}
                  description={resource.description}
                  isActive={activeResource === resource.id}
                />
              </TabsContent>
            ))}
            
            <div className="lg:col-span-2">
              <ResourceContent resourceId={activeResource} />
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
});