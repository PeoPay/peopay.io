import { mainnet, polygon, arbitrum } from 'wagmi/chains';

export const supportedChains = [
  mainnet,
  polygon,
  arbitrum,
];

export const defaultChain = polygon;

export const PEOPAY_CONTRACT_ADDRESS = {
  [polygon.id]: '0x1234567890123456789012345678901234567890', // Replace with actual contract address
} as const;