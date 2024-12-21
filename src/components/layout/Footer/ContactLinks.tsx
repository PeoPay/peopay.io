import { MailPlus, GithubIcon } from 'lucide-react';

export function ContactLinks() {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href="mailto:dan@peopay.io"
          className="text-muted-foreground hover:text-primary flex items-center transition-all duration-300 hover:translate-x-1 group"
        >
          <MailPlus className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
          dan@peopay.io
        </a>
      </li>
      <li>
        <a
          href="mailto:info@peopay.io"
          className="text-muted-foreground hover:text-primary flex items-center transition-all duration-300 hover:translate-x-1 group"
        >
          <MailPlus className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
          info@peopay.io
        </a>
      </li>
      <li>
        <a
          href="https://github.com/PeoPay"
          className="text-muted-foreground hover:text-primary flex items-center transition-all duration-300 hover:translate-x-1 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
          GitHub
        </a>
      </li>
    </ul>
  );
}