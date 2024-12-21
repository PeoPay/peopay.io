import { memo } from 'react';
import { TerminalSquare } from 'lucide-react';

export const TerminalHeader = memo(function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 mb-6 sm:mb-8">
      <TerminalSquare className="h-6 w-6" />
      <span className="text-lg sm:text-xl">Terminal v3.13.1</span>
    </div>
  );
});