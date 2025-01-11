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

export const NetworkSelector = memo(function NetworkSelector() {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  if (!chain) return null;

  return (
    <Select
      value={chain.id.toString()}
      onValueChange={(value) => switchNetwork?.(Number(value))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select network" />
      </SelectTrigger>
      <SelectContent>
        {supportedChains.map((network) => (
          <SelectItem key={network.id} value={network.id.toString()}>
            {network.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});