import {
  Coins,
  Users,
  Smartphone,
  Vote,
  Building2,
  GraduationCap,
  Shield,
  Globe,
} from 'lucide-react';

export const features = [
  {
    icon: Coins,
    title: 'PeoCoin (PEO)',
    description: 'A Polygon-native utility token enabling low-cost transactions and remittances globally.',
  },
  {
    icon: Users,
    title: 'Dynamic Contribution Scoring',
    description: 'Earn rewards through staking and community participation with our innovative DCS system.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Seamlessly convert crypto to mobile money platforms like M-Pesa for local transactions.',
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Enterprise-grade security with multi-signature wallets and advanced encryption.',
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Access financial services from anywhere, focusing on underserved regions.',
  },
  {
    icon: Vote,
    title: 'Community Governance',
    description: 'Participate in ecosystem decisions through our token-based governance system.',
  },
  {
    icon: Building2,
    title: 'MSME Solutions',
    description: 'Access micro-lending and blockchain-based credit scoring for business growth.',
  },
] as const;