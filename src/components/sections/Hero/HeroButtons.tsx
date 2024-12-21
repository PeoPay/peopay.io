import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants/links';
import { cn } from '@/lib/utils';

export const HeroButtons = memo(function HeroButtons() {
  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'get-started';
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button 
        size="lg" 
        className={cn(
          "group relative overflow-hidden",
          "bg-primary hover:bg-primary/90",
          "transition-all duration-300 hover:scale-105"
        )}
        asChild
      >
        <a href="#get-started" onClick={handleGetStarted}>
          Get Started
          <span className={cn(
            "absolute inset-0 bg-gradient-to-r",
            "from-transparent via-white/20 to-transparent",
            "translate-x-[-200%] group-hover:translate-x-[200%]",
            "transition-transform duration-700"
          )} />
        </a>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="group transition-all duration-300 hover:scale-105"
        asChild
      >
        <a 
          href={LINKS.documentation}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          View Documentation
          <span className={cn(
            "inline-block transition-transform",
            "group-hover:translate-x-1"
          )}>
            →
          </span>
        </a>
      </Button>
    </div>
  );
});