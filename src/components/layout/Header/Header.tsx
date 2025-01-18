import { memo, useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Github, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@/components/web3/ConnectButton';
import { NetworkSelector } from '@/components/web3/NetworkSelector';
import { useTheme } from 'next-themes';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Header = memo(function Header() {
  const scrollPosition = useScrollPosition();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollPosition > 0;

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'Road So Far', href: '#road' },
    { label: 'Documentation', href: 'https://docs.peopay.io' },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-4 sm:py-8"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo className="transition-all duration-300 hover:scale-105" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className="min-w-[44px] min-h-[44px]"
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}

            <NetworkSelector />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="rounded-full min-w-[44px] min-h-[44px]"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
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
              className="rounded-full bg-background/50 hover:bg-primary/20 transition-all duration-300 min-w-[44px] min-h-[44px]"
              asChild
            >
              <a
                href="https://github.com/PeoPay/PeoPay-Core"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden min-w-[44px] min-h-[44px]"
                aria-label="Open menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-20">
              <nav className="flex flex-col gap-4">
                {menuItems.map(item => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start text-lg min-h-[44px]"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
                <div className="py-4">
                  <NetworkSelector />
                </div>
                <div className="flex items-center gap-4 py-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleThemeToggle}
                    className="rounded-full min-w-[44px] min-h-[44px]"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
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
                    className="rounded-full min-w-[44px] min-h-[44px]"
                    asChild
                  >
                    <a
                      href="https://github.com/PeoPay/PeoPay-Core"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="pt-4">
                  <ConnectButton />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
});