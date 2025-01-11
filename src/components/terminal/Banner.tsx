import { memo } from 'react';
import { TypingText } from './TypingText';

export const Banner = memo(function Banner() {
  return (
    <div className="space-y-8">
      <pre className="text-green-500 font-mono text-xs sm:text-sm leading-tight overflow-x-auto">
{` ____ ____ ____ ____ ____ _________ ____ ____ ____ ____ ____ ____ ____ 
||h |||a |||p |||p |||y |||       |||h |||a |||c |||k |||i |||n |||g ||
||__|||__|||__|||__|||__|||_______|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|

`}</pre>
      <div className="flex items-center gap-2">
        <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
        <TypingText 
          text="initiating sequence..." 
          speed={100} 
          className="text-yellow-500"
        />
        <span className="animate-pulse ml-1">█</span>
      </div>
    </div>
  );
});