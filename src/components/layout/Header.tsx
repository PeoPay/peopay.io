import { Menu, X, Wallet } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Solution', href: '#solution' },
    { label: 'Education', href: '#education' },
    { label: 'Documentation', href: 'https://docs.peopay.io/' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">PeoPay-Core</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button>Get Started</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}