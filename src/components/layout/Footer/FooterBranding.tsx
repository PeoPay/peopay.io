import { memo } from 'react';
import { Logo } from '@/components/brand/Logo';
import { COMPANY } from '@/lib/constants/company';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export const FooterBranding = memo(function FooterBranding() {
  return (
    <div className="space-y-6">
      <Logo className="interactive-hover" />
      
      <p className="text-muted-foreground leading-relaxed">
        {COMPANY.description}
      </p>
      
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10"
          asChild
        >
          <a
            href="https://github.com/PeoPay"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
});