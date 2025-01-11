import { memo } from 'react';
import { FooterBranding } from './FooterBranding';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterBottom } from './FooterBottom';
import { FOOTER_LINKS } from '@/lib/constants/footer';

export const Footer = memo(function Footer() {
  return (
    <footer className="relative border-t overflow-hidden bg-card">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <FooterBranding />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 col-span-2 gap-8">
            {FOOTER_LINKS.map((section) => (
              <FooterLinks
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
          
          <FooterNewsletter />
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
});