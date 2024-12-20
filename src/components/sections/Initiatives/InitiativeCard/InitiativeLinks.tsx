import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import type { InitiativeLink } from '@/lib/types/initiatives';

interface InitiativeLinksProps {
  links: InitiativeLink[];
}

export const InitiativeLinks = memo(function InitiativeLinks({
  links,
}: InitiativeLinksProps) {
  return (
    <div className="mt-8 space-y-3">
      {links.map((link) => (
        <Button
          key={link.url}
          variant={link.primary ? "default" : "outline"}
          asChild
          className="w-full"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {link.text}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  );
});