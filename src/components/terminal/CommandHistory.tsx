import { memo } from 'react';
import { CommandLine } from './CommandLine';
import { SkillGrid } from './SkillGrid';
import { Banner } from './Banner';
import { SKILLS } from '@/lib/constants/terminal';

interface CommandHistoryProps {
  activeSkill: number | null;
  onSkillHover: (index: number | null) => void;
}

export const CommandHistory = memo(function CommandHistory({
  activeSkill,
  onSkillHover
}: CommandHistoryProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2 group">
        <CommandLine command="whoami" />
        <div className="pl-2 sm:pl-4 text-primary animate-pulse">_01x.arec1b0</div>
      </div>

      <div className="space-y-2">
        <CommandLine command="cat" args="about.txt" />
        <SkillGrid
          skills={SKILLS}
          activeSkill={activeSkill}
          onSkillHover={onSkillHover}
        />
      </div>

      <div className="space-y-1 group">
        <CommandLine 
          command="echo" 
          args='"Show some fu_ck1nG adaptability!"'
        />
      </div>

      <div className="space-y-2">
        <CommandLine command="nc" args="-lvnp 4444" />
        <div className="pl-4 opacity-80 animate-pulse">
          listening on [192.168.1.100] 4444 ...
        </div>
        <div className="pl-4 animate-pulse-slow">
          connect to [192.168.1.100] from (UNKNOWN) [192.168.1.1] 52431
        </div>
        <Banner />
      </div>
    </div>
  );
});