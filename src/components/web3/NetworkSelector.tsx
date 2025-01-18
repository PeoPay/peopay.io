import { memo } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supportedChains } from '@/lib/config/chains';
import { useToast } from '@/hooks/use-toast';

export const NetworkSelector = memo(function NetworkSelector() {
  const { chain } = useNetwork();
  const { switchNetwork, isLoading, error } = useSwitchNetwork();
  const { toast } = useToast();

  if (!chain) return null;

  const handleNetworkChange = async (value: string) => {
    try {
      await switchNetwork?.(Number(value));
    } catch (err: any) {
      if (!err?.message?.includes('User rejected')) {
        toast({
          title: 'Network Switch Failed',
          description: 'Failed to switch networks. Please try again.',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Select
      value={chain.id.toString()}
      onValueChange={handleNetworkChange}
      disabled={isLoading}
    >
      <SelectTrigger className="w-[180px] bg-background/50 backdrop-blur-sm">
        <SelectValue placeholder={isLoading ? 'Switching...' : chain.name} />
      </SelectTrigger>
      <SelectContent>
        {supportedChains.map((network) => (
          <SelectItem 
            key={network.id} 
            value={network.id.toString()}
            className="cursor-pointer"
          >
            {network.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});