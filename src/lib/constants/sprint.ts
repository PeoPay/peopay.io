import type { SprintSection } from '@/lib/types/sprint';

export const SPRINT_SECTIONS: SprintSection[] = [
  {
    title: 'Sprint Questbook Application',
    description: 'The Solidity-to-WASM Compiler simplifies migration of Solidity-based applications to the Arbitrum Stylus environment, offering lower gas costs, improved computational efficiency, and seamless EVM interoperability.',
    features: [
      'Solidity to WASM compilation',
      'Arbitrum Stylus integration',
      'Lower gas costs optimization',
      'Real-world contract migration',
      'Blueprint for Ethereum community',
    ],
  },
  {
    title: 'PeoProve: Decentralized Contribution Scoring',
    description: 'A decentralized contribution scoring system (DCS) designed to incentivize user engagement, establish on-chain reputations, and strengthen governance processes in decentralized ecosystems.',
    features: [
      'Dynamic Contribution Scoring (DCS)',
      'Reputation-based NFT Badges',
      'Governance Integration',
      'Merit-driven Environment',
      'Transparent Scoring System',
    ],
    link: {
      text: 'Read about DCS',
      url: 'https://www.academia.edu/126099614/Dynamic_Contribution_Scoring_A_Formal_Model_for_Incentive_Mechanisms_in_Decentralized_Systems',
    },
  },
];