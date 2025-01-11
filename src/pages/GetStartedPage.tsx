import { memo } from 'react';
import { Wallet, ArrowRight, ShieldCheck, Coins, Users } from 'lucide-react';
import { ConnectButton } from '@/components/web3/ConnectButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAccount } from 'wagmi';

export const GetStartedPage = memo(function GetStartedPage() {
  const { isConnected } = useAccount();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-fade-in-up space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Wallet className="h-16 w-16 text-primary animate-float" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Started with PeoPay
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your wallet to start exploring decentralized finance and community empowerment
          </p>

          <div className="flex justify-center">
            <ConnectButton />
          </div>

          {isConnected && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Secure Setup</h3>
                <p className="text-muted-foreground">Your wallet is now securely connected to PeoPay</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/security">
                    View Security
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                <Coins className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Start Trading</h3>
                <p className="text-muted-foreground">Explore our decentralized exchange features</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/trade">
                    Go to DEX
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Join Community</h3>
                <p className="text-muted-foreground">Participate in governance and earn rewards</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/community">
                    Get Involved
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});