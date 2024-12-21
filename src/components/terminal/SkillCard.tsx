import { memo } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: LucideIcon;
  label: string;
  color: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SkillCard = memo(function SkillCard({
  icon: Icon,
  label,
  color,
  isActive,
  onMouseEnter,
  onMouseLeave
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
        "hover:bg-white/5 cursor-pointer group",
        isActive && "bg-white/10"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon 
        className={cn(
          "h-5 w-5 transition-transform duration-300",
          color,
          "group-hover:scale-110"
        )}
      />
      <span className="group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </div>
  );
});