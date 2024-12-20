import { memo, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const MenuButton = memo(function MenuButton({ 
  isOpen, 
  onClick, 
  className 
}: MenuButtonProps) {
  return (
    <button
      className={cn(
        "md:hidden p-2 rounded-md hover:bg-accent transition-colors",
        className
      )}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </button>
  );
});