import {
  Coins,
  Users,
  Smartphone,
  Vote,
  Building2,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const features: Feature[] = [
  {
    icon: Coins,
    title: 'PeoCoin (PEO)',
    description:
      'A Polygon-native utility token enabling low-cost transactions and remittances globally.'
  },
  {
    icon: Users,
    title: 'Dynamic Contribution Scoring',
    description:
      'Earn rewards through staking and community participation with our innovative DCS system.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description:
      'Seamlessly convert crypto to mobile money platforms like M-Pesa for local transactions.'
  },
  {
    icon: Vote,
    title: 'Community Governance',
    description:
      'Participate in ecosystem decisions through our token-based governance system.',
  },
  {
    icon: Building2,
    title: 'MSME Solutions',
    description:
      'Access micro-lending and blockchain-based credit scoring for business growth.',
  },
  {
    icon: GraduationCap,
    title: 'Education First',
    description:
      'Comprehensive training and resources to maximize platform benefits.',
  },
];