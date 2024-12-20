import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InitiativesHero = memo(function InitiativesHero() {
  return (
    <section className="pt-32 pb-20 bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Core Initiatives
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Exploring innovative solutions to empower decentralized communities through cutting-edge blockchain technology
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="https://github.com/PeoPay/PeoPay-Core" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});