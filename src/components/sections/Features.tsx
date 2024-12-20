import {
  Coins,
  Users,
  Smartphone,
  Vote,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Coins,
    title: 'PeoCoin (PEO)',
    description:
      'A Polygon-native utility token enabling low-cost transactions and remittances globally.',
  },
  {
    icon: Users,
    title: 'Dynamic Contribution Scoring',
    description:
      'Earn rewards through staking and community participation with our innovative DCS system.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description:
      'Seamlessly convert crypto to mobile money platforms like M-Pesa for local transactions.',
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

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}