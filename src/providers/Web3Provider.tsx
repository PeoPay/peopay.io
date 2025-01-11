import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from '@wagmi/core/providers/public';
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { supportedChains } from '@/lib/config/chains';
import { useTheme } from 'next-themes';

const { chains, provider } = configureChains(
  supportedChains,
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PeoPay DeFi',
  projectId: 'c8a52f1f5f234bb0f4c5a4f9c5a4f9c5',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

interface Web3ProviderProps {
  children: React.ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const { theme } = useTheme();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={theme === 'dark' ? darkTheme() : lightTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}