import { memo } from 'react';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/types/navigation';

interface MobileNavLinksProps {
  items: NavItem[];
  className?: string;
}

export const MobileNavLinks = memo(function MobileNavLinks({ 
  items, 
  className 
}: MobileNavLinksProps) {
  return (
    <nav className={cn("flex flex-wrap gap-4", className)}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
});