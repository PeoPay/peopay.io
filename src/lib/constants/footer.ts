import {
  BookOpen,
  MessageCircle,
  Github,
  Twitter,
  Mail,
  FileText,
  Users,
  Code,
} from 'lucide-react';
import { createElement } from 'react';
import type { FooterSection } from '@/lib/types/footer';

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Resources',
    links: [
      {
        label: 'Documentation',
        href: 'https://docs.peopay.io',
        icon: createElement(BookOpen, { className: "h-4 w-4" }),
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/PeoPay',
        icon: createElement(Github, { className: "h-4 w-4" }),
        external: true,
      },
      {
        label: 'Community',
        href: 'https://github.com/orgs/PeoPay/discussions',
        icon: createElement(Users, { className: "h-4 w-4" }),
        external: true,
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '#about',
        icon: createElement(FileText, { className: "h-4 w-4" }),
      },
      {
        label: 'Contact',
        href: 'mailto:contact@peopay.io',
        icon: createElement(Mail, { className: "h-4 w-4" }),
        external: true,
      },
      {
        label: 'Developers',
        href: '/developers',
        icon: createElement(Code, { className: "h-4 w-4" }),
      },
    ],
  },
];