import { memo } from 'react';

export const SkipLink = memo(function SkipLink() {
  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50
        bg-primary text-primary-foreground
        px-4 py-2 rounded-md
        transition-transform duration-200
        focus:outline-none focus:ring-2 focus:ring-primary
        -translate-y-full focus:translate-y-0
      `}
    >
      Skip to main content
    </a>
  );
});