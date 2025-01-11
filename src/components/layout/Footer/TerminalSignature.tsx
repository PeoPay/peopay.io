import { memo } from 'react';
import { Terminal } from 'lucide-react';

export const TerminalSignature = memo(function TerminalSignature() {
  return (
    <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground font-mono">
      <div className="flex items-center gap-2 text-green-500">
        <Terminal className="h-4 w-4" />
        <span>[01x.arec1b0@peopay ~]$</span>
      </div>
      <div className="text-xs flex items-center gap-2">
        <span className="text-green-500">$</span>
        <span className="text-yellow-500">echo</span>
        <span className="text-primary">"Decentralization isn't optional -- it's the future"</span>
      </div>
    </div>
  );
});