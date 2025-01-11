import { memo } from 'react';
import { Timeline } from '@/components/sections/RoadSoFar/Timeline';

export const RoadSoFarPage = memo(function RoadSoFarPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              The Road So Far
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our journey in revolutionizing decentralized finance and empowering communities
            </p>
          </div>
          
          <Timeline />
        </div>
      </div>
    </div>
  );
});