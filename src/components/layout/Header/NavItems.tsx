import { memo } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { NavItem } from '@/lib/types/navigation';

interface NavItemsProps {
  items: NavItem[];
  className?: string;
}

export const NavItems = memo(function NavItems({ 
  items, 
  className 
}: NavItemsProps) {
  return (
    <nav className={className}>
      <div className="flex items-center gap-4 sm:gap-8">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
        <Button size="sm" className="whitespace-nowrap">
          Get Started
        </Button>
      </div>
    </nav>
  );
});