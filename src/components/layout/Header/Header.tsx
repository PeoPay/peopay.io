import { memo } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Github, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@/components/web3/ConnectButton';
import { NetworkSelector } from '@/components/web3/NetworkSelector';
import { useTheme } from 'next-themes';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export const Header = memo(function Header() {
  const scrollPosition = useScrollPosition();
  const { theme, setTheme } = useTheme();
  const isScrolled = scrollPosition > 0;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo className="transition-all duration-300 hover:scale-105" />
          
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              asChild
              className="hidden md:flex"
            >
              <a href="#road">Road So Far</a>
            </Button>

            <NetworkSelector />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

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
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
});