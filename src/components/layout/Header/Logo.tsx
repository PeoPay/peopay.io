import { Wallet } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <Wallet className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold">PeoPay-Core</span>
    </div>
  );
}