import { memo } from 'react';
import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Wallet, LogOut, ChevronDown, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ConnectButton = memo(function ConnectButton() {
  const { t } = useTranslation();
  const { toast } = useToast();

  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        if (!ready) return null;

        if (!account) {
          return (
            <Button 
              onClick={openConnectModal}
              className="flex items-center gap-2"
            >
              <Wallet className="h-4 w-4" />
              {t('common.connect')}
            </Button>
          );
        }

        if (chain?.unsupported) {
          return (
            <Button
              onClick={openChainModal}
              variant="destructive"
            >
              Wrong network
            </Button>
          );
        }

        return (
          <div className="flex items-center gap-3">
            <Button
              onClick={openChainModal}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              {chain.hasIcon && (
                <div className="h-4 w-4">
                  {chain.iconUrl && (
                    <img
                      alt={chain.name ?? 'Chain icon'}
                      src={chain.iconUrl}
                      className="h-4 w-4"
                    />
                  )}
                </div>
              )}
              {chain.name}
              <ChevronDown className="h-4 w-4" />
            </Button>

            <Button
              onClick={openAccountModal}
              variant="outline"
              className="flex items-center gap-2"
            >
              {account.displayName}
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
});