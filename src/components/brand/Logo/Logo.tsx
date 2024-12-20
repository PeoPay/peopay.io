import { memo } from 'react';
import { LogoIcon } from './LogoIcon';
import { LogoText } from './LogoText';
import { cn } from '@/lib/utils';

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
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon className={cn("h-8 w-8", iconClassName)} />
      <LogoText className={cn("text-xl font-bold", textClassName)} />
    </div>
  );
});