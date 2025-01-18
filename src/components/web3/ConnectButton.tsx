import { memo } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/utils/analytics';

export const ConnectButton = memo(function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();

  const handleConnect = async () => {
    try {
      const connector = connectors[0];
      if (!connector) {
        throw new Error('No connector available');
      }
      await connect({ connector });
      // Track successful wallet connection
      trackEvent('wallet_connect', 'Web3', 'Success');
    } catch (err: any) {
      // Don't show error toast for user rejections
      if (err?.message?.includes('User rejected')) {
        trackEvent('wallet_connect', 'Web3', 'User Rejected');
        return;
      }
      
      trackEvent('wallet_connect', 'Web3', 'Error', 0);
      toast({
        title: 'Connection Error',
        description: 'Failed to connect wallet. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleDisconnect = () => {
    disconnect();
    trackEvent('wallet_disconnect', 'Web3', 'Success');
  };

  // Don't show error toast for user rejections
  if (error && !error.message.includes('User rejected')) {
    toast({
      title: 'Connection Error',
      description: error.message,
      variant: 'destructive',
    });
  }

  if (isConnected && address) {
    return (
      <Button
        onClick={handleDisconnect}
        variant="outline"
        className="flex items-center gap-2"
      >
        {address.slice(0, 6)}...{address.slice(-4)}
        <LogOut className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect}
      disabled={isLoading}
      className="flex items-center gap-2"
    >
      <Wallet className="h-4 w-4" />
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
});