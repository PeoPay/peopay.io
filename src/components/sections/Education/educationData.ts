import { BookOpen, Users, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Resource {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  contentTitle: string;
  content: string[];
  link?: string;
}

export const resources: Resource[] = [
  {
    id: 'documentation',
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials for all skill levels.',
    contentTitle: 'Getting Started with Documentation',
    content: [
      'Explore our comprehensive documentation covering everything from basic concepts to advanced features.',
      'Follow step-by-step tutorials designed for different skill levels.',
      'Access API references and integration guides.',
      'Learn best practices and implementation patterns.',
    ],
    link: 'https://docs.peopay.io/',
  },
  {
    id: 'video-tutorials',
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn through interactive video content and demonstrations.',
    contentTitle: 'Video Learning Resources',
    content: [
      'Watch guided tutorials on platform features and implementation.',
      'Access live coding sessions and real-world examples.',
      'Learn from expert demonstrations and best practices.',
      'Follow along with hands-on project tutorials.',
    ],
    link: '#',
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Support',
    description: 'Join our community for discussions and peer learning.',
    contentTitle: 'Join Our Community',
    content: [
      'Connect with other developers and users in our community forums.',
      'Participate in discussions and knowledge sharing.',
      'Get help from experienced community members.',
      'Stay updated with the latest news and announcements.',
    ],
    link: 'https://github.com/orgs/PeoPay/discussions',
  },
];