import { memo } from 'react';
import { Wallet2, TerminalSquare } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { QuickLinks } from './QuickLinks';
import { ResourceLinks } from './ResourceLinks';
import { ContactLinks } from './ContactLinks';
import { TerminalSignature } from './TerminalSignature';
import { useInteractiveColor } from '@/hooks/useInteractiveColor';
import { COMPANY } from '@/lib/constants/company';
import { cn } from '@/lib/utils';

export const Footer = memo(function Footer() {
  const { color, handleMouseMove, handleMouseLeave } = useInteractiveColor({
    baseHue: 220,
    baseLightness: 8,
    hueRange: 20,
    saturationRange: 15,
  });

  return (
    <footer
      className="relative border-t border-primary/10 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-50" />
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 group">
              <Wallet2 className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold tracking-wide transition-colors duration-300 group-hover:text-primary">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-muted-foreground">
              Accessibility. Transparency. Empowerment.
            </p>
          </div>

          <FooterSection title="Resources">
            <ResourceLinks />
          </FooterSection>

          <FooterSection title="Contact">
            <ContactLinks />
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col items-center gap-4">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <TerminalSignature />
        </div>
      </div>
    </footer>
  );
});