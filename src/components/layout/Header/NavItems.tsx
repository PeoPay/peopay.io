import { memo } from 'react';
import { cn } from '@/lib/utils';
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
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
});