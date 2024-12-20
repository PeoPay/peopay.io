import { MobileNavLinks } from './MobileNavLinks';
import { Transition } from '@/components/ui/headless/Transition';
import { Portal } from '@/components/ui/headless/Portal';
import type { NavItem } from '@/lib/types/navigation';

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
}

export function MobileMenu({ items, isOpen }: MobileMenuProps) {
  return (
    <Portal>
      {/* Backdrop */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" />
      </Transition>

      {/* Menu */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-200"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform duration-150"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks items={items} />
            </div>
          </div>
        </div>
      </Transition>
    </Portal>
  );
}