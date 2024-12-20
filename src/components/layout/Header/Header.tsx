import { Menu, X } from 'lucide-react';
import { useState, memo, useCallback } from 'react';
import { Logo } from '@/components/brand/Logo';
import { NavItems } from './NavItems';
import { MobileMenu } from './MobileMenu';
import { MenuButton } from './MenuButton';
import { NAVIGATION } from '@/lib/constants/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useKeyPress } from '@/hooks/useKeyPress';
import { cn } from '@/lib/utils';

export const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useKeyPress('Escape', closeMenu, [closeMenu]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isScrolled = scrollPosition > 0;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background/50 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavItems 
            items={NAVIGATION.main} 
            className="hidden md:flex items-center space-x-8" 
          />
          <MenuButton 
            isOpen={isMenuOpen} 
            onClick={toggleMenu} 
          />
        </div>
      </div>
      <MobileMenu items={NAVIGATION.main} isOpen={isMenuOpen} />
    </header>
  );
});