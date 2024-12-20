import { memo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resources } from './educationData';
import { ResourceCard } from './ResourceCard';
import { ResourceContent } from './ResourceContent';

export const Education = memo(function Education() {
  const [activeResource, setActiveResource] = useState(resources[0].id);

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Education Hub</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Access resources and training to maximize your experience with PeoPay-Core.
          </p>
        </div>
        
        <Tabs defaultValue={activeResource} onValueChange={setActiveResource}>
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-0 w-full mb-6 sm:mb-8">
            {resources.map((resource) => (
              <TabsTrigger
                key={resource.id}
                value={resource.id}
                className="group data-[state=active]:bg-primary w-full"
              >
                <resource.icon className="h-5 w-5 mr-2 group-data-[state=active]:text-primary-foreground" />
                <span className="group-data-[state=active]:text-primary-foreground">
                  {resource.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
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