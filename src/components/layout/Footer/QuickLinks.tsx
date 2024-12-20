import { NAVIGATION } from '@/lib/constants/navigation';

export function QuickLinks() {
  return (
    <ul className="space-y-2">
      {NAVIGATION.main.map((link) => (
        <li key={link.href}>
          <a 
            href={link.href} 
            className="text-muted-foreground hover:text-primary"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}