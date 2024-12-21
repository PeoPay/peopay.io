import { memo } from 'react';
import { cn } from '@/lib/utils';

interface CommandLineProps {
  prompt?: string;
  command: string;
  args?: string;
  className?: string;
}

export const CommandLine = memo(function CommandLine({
  prompt = "[01x.arec1b0@peopay ~]$",
  command,
  args,
  className
}: CommandLineProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-green-500">{prompt}</span>
      <span className="text-yellow-500">{command}</span>
      {args && <span className="text-primary">{args}</span>}
    </div>
  );
});