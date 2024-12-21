import { memo } from 'react';
import { SkillCard } from './SkillCard';
import type { Skill } from '@/lib/types/skills';

interface SkillGridProps {
  skills: Skill[];
  activeSkill: number | null;
  onSkillHover: (index: number | null) => void;
}

export const SkillGrid = memo(function SkillGrid({
  skills,
  activeSkill,
  onSkillHover
}: SkillGridProps) {
  return (
    <div className="pl-2 sm:pl-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.label}
          {...skill}
          isActive={activeSkill === index}
          onMouseEnter={() => onSkillHover(index)}
          onMouseLeave={() => onSkillHover(null)}
        />
      ))}
    </div>
  );
});