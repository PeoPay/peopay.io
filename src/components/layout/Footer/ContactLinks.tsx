import { Mail, Github } from 'lucide-react';

export function ContactLinks() {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href="mailto:dan@peopay.io"
          className="text-muted-foreground hover:text-primary flex items-center"
        >
          <Mail className="h-4 w-4 mr-2" />
          dan@peopay.io
        </a>
      </li>
      <li>
        <a
          href="mailto:info@peopay.io"
          className="text-muted-foreground hover:text-primary flex items-center"
        >
          <Mail className="h-4 w-4 mr-2" />
          info@peopay.io
        </a>
      </li>
      <li>
        <a
          href="https://github.com/PeoPay"
          className="text-muted-foreground hover:text-primary flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4 mr-2" />
          GitHub
        </a>
      </li>
    </ul>
  );
}