interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Community Building',
    description: 'Establishing core infrastructure, community engagement, and initial token distribution.',
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Mobile Integration & Partnerships',
    description: 'Integration with mobile money platforms and establishing strategic partnerships.',
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: 'DeFi Services Launch',
    description: 'Rolling out micro-lending, staking, and advanced DeFi features.',
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Global Expansion',
    description: 'Expanding to new regions and implementing localized solutions.',
    status: 'upcoming',
  },
];