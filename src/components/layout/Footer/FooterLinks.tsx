import { memo } from 'react';
import { cn } from '@/lib/utils';
import type { FooterSection } from '@/lib/types/footer';

interface FooterLinksProps extends FooterSection {
  className?: string;
}

export const FooterLinks = memo(function FooterLinks({
  title,
  links,
  className,
}: FooterLinksProps) {
  return (
    <div className={className}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                "flex items-center gap-2 group"
              )}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {link.icon && (
                <span className="transition-transform group-hover:translate-x-1">
                  {link.icon}
                </span>
              )}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});