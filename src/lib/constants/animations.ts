export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    extraSlow: '800ms'
  },
  timing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.45, 0, 0.55, 1)',
  },
  stagger: {
    delay: '50ms',
  },
  parallax: {
    amount: '15%',
  },
  scale: {
    hover: 1.02,
    active: 0.98,
  },
} as const;