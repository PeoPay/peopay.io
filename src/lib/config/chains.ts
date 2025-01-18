import { arbitrum, mainnet } from 'viem/chains';

export const supportedChains = [
  mainnet,
  arbitrum,
];

export const defaultChain = mainnet;

export const PEOPAY_CONTRACT_ADDRESS = {
  [mainnet.id]: '0x1234567890123456789012345678901234567890', // Replace with actual contract address
  [arbitrum.id]: '0x1234567890123456789012345678901234567890', // Replace with actual contract address
} as const;