export const THEME = {
  colors: {
    primary: '#319BBC',
    primaryLight: '#41AFDB',
    primaryDark: '#2687A8',
    primaryTransparent: 'rgba(49, 155, 188, 0.1)',
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    timing: {
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;