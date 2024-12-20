import type { RoadmapPhase } from '@/lib/types/roadmap';

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 'MVP Launch (Phase 1)',
    milestones: [
      {
        title: 'Core Infrastructure',
        timeline: 'Month 3',
        objectives: [
          'Deploy PeoCoin on Polygon Testnet',
          'Implement staking mechanism',
          'Set up governance framework',
          'Launch community funding test contracts',
        ],
        status: 'completed',
      },
    ],
  },
  {
    phase: 'Pilot Integration (Phase 2)',
    milestones: [
      {
        title: 'Mobile Integration & Community Governance',
        timeline: 'Month 6',
        objectives: [
          'Integrate crypto-to-mobile (M-Pesa)',
          'Launch first community funding vote',
          'Establish strategic partnerships',
          'Begin pilot program with MSMEs',
        ],
        status: 'in-progress',
      },
    ],
  },
  {
    phase: 'Stablecoin & Scaling (Phase 3)',
    milestones: [
      {
        title: 'Growth & Adoption',
        timeline: 'Month 9',
        objectives: [
          'Launch localized stablecoin',
          'Onboard 50,000 users',
          'Integrate 5,000 MSMEs',
          'Fund multiple community projects',
        ],
        status: 'upcoming',
      },
    ],
  },
  {
    phase: 'Regional Expansion (Phase 4)',
    milestones: [
      {
        title: 'Market Expansion',
        timeline: 'Month 12',
        objectives: [
          'Expand to 3 new regions',
          'Reach $10M transaction volume',
          'Launch regional stablecoins',
          'Establish local partnerships',
        ],
        status: 'upcoming',
      },
    ],
  },
];