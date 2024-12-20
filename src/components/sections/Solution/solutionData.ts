import { Smartphone, Shield, Globe, Coins, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    icon: Smartphone,
    title: 'Mobile Money Integration',
    description: 'Seamlessly connect your crypto wallet with local mobile money services for instant transfers.',
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
    icon: Coins,
    title: 'Staking Rewards',
    description: 'Generate passive income by staking your assets in our eco-friendly proof-of-stake network.',
  },
  {
    icon: Users,
    title: 'P2P Trading',
    description: 'Direct peer-to-peer trading with no intermediaries and low fees.',
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Lightning-fast transactions with near-zero fees using Layer 2 scaling solutions.',
  },
];