export const ANIMATIONS = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  transition: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;