import { memo } from 'react';
import { LogoIcon } from './LogoIcon';
import { LogoText } from './LogoText';
import { cn } from '@/lib/utils';
import { COMPANY } from '@/lib/constants/company';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo = memo(function Logo({ 
  className,
  iconClassName,
  textClassName
}: LogoProps) {
  return (
    <a 
      href={COMPANY.website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 transition-all duration-300",
        "hover:text-primary hover:scale-105",
        className
      )}
    >
      <LogoIcon className={cn("h-8 w-8", iconClassName)} />
      <LogoText className={cn("text-xl font-bold", textClassName)} />
    </a>
  );
});