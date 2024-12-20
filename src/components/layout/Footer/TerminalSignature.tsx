import { memo } from 'react';
import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export const TerminalSignature = memo(function TerminalSignature() {
  const [glitchText, setGlitchText] = useState("Decentralization isn't optional -- it's the future");
  
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let timeout: NodeJS.Timeout;

    const startGlitch = () => {
      const originalText = "Decentralization isn't optional -- it's the future";
      let iterations = 0;
      
      const glitch = () => {
        if (iterations < 3) {
          const glitched = originalText
            .split('')
            .map(char => 
              Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
            )
            .join('');
          
          setGlitchText(glitched);
          iterations++;
          timeout = setTimeout(glitch, 100);
        } else {
          setGlitchText(originalText);
        }
      };

      glitch();
    };

    const interval = setInterval(startGlitch, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  const handleTerminalClick = () => {
    window.location.hash = 'author';
  };

  return (
    <div 
      className="flex flex-col items-center gap-1 text-sm text-muted-foreground font-mono cursor-pointer hover:text-primary transition-colors"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center gap-2 text-green-500">
        <Terminal className="h-4 w-4" />
        <span>[01x.arec1b0@peopay ~]$</span>
      </div>
      <div className="text-xs flex items-center gap-2">
        <span className="text-green-500">$</span>
        <span className="text-yellow-500">echo</span>
        <span className="text-primary">"{glitchText}"</span>
      </div>
    </div>
  );
});