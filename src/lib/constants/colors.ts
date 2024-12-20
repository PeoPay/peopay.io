export const COLORS = {
  primary: {
    DEFAULT: '#319BBC',
    light: '#41AFDB',
    dark: '#2687A8',
    transparent: 'rgba(49, 155, 188, 0.1)',
  },
  text: {
    primary: 'hsl(var(--foreground))',
    secondary: 'hsl(var(--muted-foreground))',
    accent: 'hsl(var(--accent-foreground))',
  },
  background: {
    primary: 'hsl(var(--background))',
    secondary: 'hsl(var(--secondary))',
    muted: 'hsl(var(--muted))',
  },
} as const;