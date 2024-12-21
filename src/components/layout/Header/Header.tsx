import { memo } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useInteractiveColor } from '@/hooks/useInteractiveColor';
import { cn } from '@/lib/utils';

export const Header = memo(function Header() {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;
  const { color, handleMouseMove, handleMouseLeave } = useInteractiveColor({
    baseHue: 220,
    baseLightness: 15,
  });

  return (
    <header 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-8"
      )}
      style={{
        backgroundColor: isScrolled ? color : 'transparent',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo className="transition-all duration-300 hover:scale-105" />
          
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full bg-background/50 hover:bg-primary/20 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/PeoPay/PeoPay-Core"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              className="rounded-full bg-primary/90 hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href="#get-started">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
});