import { memo, useState } from 'react';
import { MatrixRain } from '@/components/effects/MatrixRain';
import { TerminalHeader } from '@/components/terminal/TerminalHeader';
import { CommandHistory } from '@/components/terminal/CommandHistory';
import { useInteractiveColor } from '@/hooks/useInteractiveColor';
import { cn } from '@/lib/utils';

export const AuthorPage = memo(function AuthorPage() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { color, handleMouseMove, handleMouseLeave } = useInteractiveColor({
    baseHue: 120,
    baseLightness: 5,
  });

  return (
    <div 
      className="min-h-screen bg-black text-green-500 font-mono relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color }}
    >
      <MatrixRain />
      <div className="max-w-3xl mx-auto space-y-6 p-4 sm:p-8 relative z-10">
        <TerminalHeader />
        <CommandHistory
          activeSkill={activeSkill}
          onSkillHover={setActiveSkill}
        />
      </div>
    </div>
  );
});