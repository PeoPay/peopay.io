import { memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const RevealOnScroll = memo(function RevealOnScroll({
  children,
  className,
  threshold,
  rootMargin,
  triggerOnce = true,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-on-scroll',
        isVisible && 'is-visible',
        className
      )}
    >
      {children}
    </div>
  );
});