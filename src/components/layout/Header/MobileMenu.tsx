import { memo } from 'react';
import { MobileNavLinks } from './MobileNavLinks';
import { Transition } from '@/components/ui/headless/Transition';
import { Portal } from '@/components/ui/headless/Portal';
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = memo(function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <Transition show={isOpen}>
        <div className="fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed top-[4.5rem] left-0 right-0 z-50 bg-background border-b border-border animate-in slide-in-from-top duration-300">
            <div className="container px-4 py-4">
              <nav className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "block py-2 text-foreground transition-colors",
                      "hover:text-primary"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </Portal>
  );
});