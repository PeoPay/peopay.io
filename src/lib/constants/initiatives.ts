import type { Initiative } from '@/lib/types/initiatives';

export const INITIATIVES: Initiative[] = [
  {
    title: 'Sprint Questbook Application',
    description: 'The Solidity-to-WASM Compiler simplifies migration of Solidity-based applications to the Arbitrum Stylus environment, offering lower gas costs, improved computational efficiency, and seamless EVM interoperability.',
    features: [
      'Solidity to WASM compilation for optimized performance',
      'Seamless Arbitrum Stylus integration',
      'Significant reduction in gas costs',
      'Production-ready contract migration system',
      'Comprehensive blueprint for Ethereum ecosystem',
    ],
    links: [
      {
        text: 'View Technical Documentation',
        url: 'https://docs.peopay.io/sprint-questbook',
        primary: true,
      },
      {
        text: 'Explore on GitHub',
        url: 'https://github.com/PeoPay/sprint-questbook',
      },
    ],
  },
  {
    title: 'PeoProve: Decentralized Contribution Scoring',
    description: 'A decentralized contribution scoring system (DCS) designed to incentivize user engagement, establish on-chain reputations, and strengthen governance processes in decentralized ecosystems.',
    features: [
      'Advanced Dynamic Contribution Scoring (DCS)',
      'NFT-powered reputation badge system',
      'Integrated governance framework',
      'Transparent merit-based environment',
      'Real-time contribution tracking and rewards',
    ],
    links: [
      {
        text: 'Read DCS Research Paper',
        url: 'https://www.academia.edu/126099614/Dynamic_Contribution_Scoring_A_Formal_Model_for_Incentive_Mechanisms_in_Decentralized_Systems',
        primary: true,
      },
      {
        text: 'View Implementation',
        url: 'https://github.com/PeoPay/peoprove',
      },
    ],
  },
];