import { memo } from 'react';
import { TypingText } from './TypingText';
import { cn } from '@/lib/utils';

const BANNER_ART = `
   __                                            
  /\\ \\                                           
  \\ \\ \\___      __     _____   _____   __  __    
   \\ \\  _ \`\\  /'__\`\\  /\\ '__\`\\/\\ '__\`\\/\\ \\/\\ \\   
    \\ \\ \\ \\ \\/\\ \\L\\.\\_\\ \\ \\L\\ \\ \\ \\L\\ \\ \\ \\_\\ \\  
     \\ \\_\\ \\_\\ \\__/.\\_\\\\ \\ ,__/\\ \\ ,__/\\/\`____ \\ 
      \\/_/\\/_/\\/__/\\/_/ \\ \\ \\/  \\ \\ \\/  \`/___/> \\
                         \\ \\_\\   \\ \\_\\     /\\___/
                          \\/_/    \\/_/     \\/__/ 
   __                       __                              
  /\\ \\                     /\\ \\      __                     
  \\ \\ \\___      __      ___\\ \\ \\/'\\ /\\_\\    ___      __     
   \\ \\  _ \`\\  /'__\`\\   /'___\\ \\ , < \\/\\ \\ /' _ \`\\  /'_ \`\\   
    \\ \\ \\ \\ \\/\\ \\L\\.\\_/\\ \\__/\\ \\ \\\\\`\\\\ \\ \\/\\ \\/\\ \\/\\ \\L\\ \\  
     \\ \\_\\ \\_\\ \\__/.\\_\\ \\____\\\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\____ \\ 
      \\/_/\\/_/\\/__/\\/_/\\/____/ \\/_/\\/_/\\/_/\\/_/\\/_/\\/___L\\ \\
                                                     /\\____/
                                                     \\_/__/
`;

export const Banner = memo(function Banner() {
  return (
    <div className="space-y-8 group">
      <pre 
        className={cn(
          "font-mono text-[0.5rem] sm:text-xs leading-tight overflow-x-auto",
          "text-green-400 transition-all duration-500",
          "group-hover:text-primary group-hover:scale-105 transform",
          "whitespace-pre select-none"
        )}
      >
        {BANNER_ART}
      </pre>
      <div className="flex items-center gap-2">
        <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
        <TypingText 
          text="system compromised... access granted" 
          speed={80} 
          className={cn(
            "text-yellow-500 transition-colors duration-300",
            "group-hover:text-primary"
          )}
        />
        <span className={cn(
          "ml-1 animate-pulse transition-colors duration-300",
          "text-yellow-500 group-hover:text-primary"
        )}>
          █
        </span>
      </div>
    </div>
  );
});