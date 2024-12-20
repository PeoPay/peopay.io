import { memo } from 'react';
import { cn } from '@/lib/utils';

import { COMPANY } from '@/lib/constants/company';

interface LogoTextProps {
  className?: string;
}

export const LogoText = memo(function LogoText({ className }: LogoTextProps) {
  return (
    <span className={cn("font-bold tracking-wider", className)}>
      {COMPANY.name}
    </span>
  );
});