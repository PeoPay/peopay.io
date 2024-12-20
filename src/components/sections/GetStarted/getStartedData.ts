import { Book, MessageCircle, Code } from 'lucide-react';
import { LINKS } from '@/lib/constants/links';

export const getStartedData = [
  {
    title: 'Read Documentation',
    description: 'Comprehensive guides and tutorials to help you get started with PeoPay-Core.',
    href: LINKS.documentation,
    icon: Book,
  },
  {
    title: 'Join Community',
    description: 'Connect with other users, get support, and stay updated with the latest news.',
    href: LINKS.community,
    icon: MessageCircle,
  },
  {
    title: 'Start Building',
    description: 'Access developer resources and start building on PeoPay-Core.',
    href: LINKS.development,
    icon: Code,
  },
] as const;