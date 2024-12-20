interface FooterLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface FooterLinksProps {
  links: FooterLink[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-muted-foreground hover:text-primary flex items-center"
            {...(link.external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}