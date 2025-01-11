import { memo } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface AnimatePresenceProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
}

export const AnimatePresence = memo(function AnimatePresence({
  children,
  className,
  animation = 'fade'
}: AnimatePresenceProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn(
        className,
        animation === 'fade' && 'animate-fade-in',
        animation === 'slide' && 'animate-slide-in',
        animation === 'scale' && 'animate-scale-in'
      )}
    >
      {children}
    </div>
  );
});