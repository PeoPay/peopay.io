import { memo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Education } from '../Education/Education';
import { Roadmap } from '../Roadmap/Roadmap';
import { UnifiedFeatures } from '../Features/UnifiedFeatures';
import { cn } from '@/lib/utils';

export const CombinedSection = memo(function CombinedSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Explore PeoPay
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our features, educational resources, and project roadmap
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className={cn(
            "w-full max-w-md mx-auto mb-12",
            "grid grid-cols-3 h-14 items-center",
            "bg-background/80 shadow-lg rounded-full p-1 backdrop-blur-sm border border-primary/10"
          )}>
            <TabsTrigger 
              value="features"
              className={cn(
                "data-[state=active]:bg-primary data-[state=active]:shadow-lg",
                "data-[state=active]:text-primary-foreground",
                "rounded-full h-12 transition-all duration-300",
                "hover:bg-primary/10 hover:scale-105"
              )}
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="education"
              className={cn(
                "data-[state=active]:bg-primary",
                "data-[state=active]:text-primary-foreground",
                "rounded-full h-12 transition-all"
              )}
            >
              Education
            </TabsTrigger>
            <TabsTrigger 
              value="roadmap"
              className={cn(
                "data-[state=active]:bg-primary",
                "data-[state=active]:text-primary-foreground",
                "rounded-full h-12 transition-all"
              )}
            >
              Roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-0">
            <UnifiedFeatures />
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <Education />
          </TabsContent>

          <TabsContent value="roadmap" className="mt-0">
            <Roadmap />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
});