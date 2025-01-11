import { memo } from 'react';
import { COMPANY } from '@/lib/constants/company';

export const FooterBottom = memo(function FooterBottom() {
  return (
    <div className="mt-16 pt-8 border-t border-primary/10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
});