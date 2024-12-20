import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Empowering Communities Through Blockchain Unity
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Breaking down financial barriers and fostering global collaboration through
          decentralized solutions. Join us in creating an inclusive financial ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}