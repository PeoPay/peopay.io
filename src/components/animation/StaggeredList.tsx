import { memo, Children, isValidElement, cloneElement } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { ANIMATIONS } from '@/lib/constants/animations';

interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  staggerDelay?: string;
}

export const StaggeredList = memo(function StaggeredList({
  children,
  className,
  itemClassName,
  staggerDelay = ANIMATIONS.stagger.delay,
}: StaggeredListProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child, {
          className: cn(
            'stagger-item',
            isVisible && 'is-visible',
            itemClassName,
            child.props.className
          ),
          style: {
            ...child.props.style,
            transitionDelay: isVisible ? `${parseInt(staggerDelay) * index}ms` : undefined,
          },
        });
      })}
    </div>
  );
});