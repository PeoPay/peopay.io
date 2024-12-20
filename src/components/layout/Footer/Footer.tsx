import { memo } from 'react';
import { Wallet, Terminal } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { QuickLinks } from './QuickLinks';
import { ResourceLinks } from './ResourceLinks';
import { ContactLinks } from './ContactLinks';
import { TerminalSignature } from './TerminalSignature';
import { COMPANY } from '@/lib/constants/company';
import { cn } from '@/lib/utils';

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wallet className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">{COMPANY.name}</span>
            </div>
            <p className="text-muted-foreground">
              {COMPANY.description}
            </p>
          </div>

          <FooterSection title="Quick Links">
            <QuickLinks />
          </FooterSection>

          <FooterSection title="Resources">
            <ResourceLinks />
          </FooterSection>

          <FooterSection title="Contact">
            <ContactLinks />
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <TerminalSignature />
        </div>
      </div>
    </footer>
  );
});