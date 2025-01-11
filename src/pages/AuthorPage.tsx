import { memo } from 'react';
import { Terminal, Shield, Code, Network } from 'lucide-react';
import { Banner } from '@/components/terminal/Banner';
import { MatrixRain } from '@/components/effects/MatrixRain';

export const AuthorPage = memo(function AuthorPage() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 sm:p-8">
      <MatrixRain />
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Terminal className="h-6 w-6" />
          <span className="text-lg sm:text-xl">Terminal v3.13.1</span>
        </div>

        {/* Command History */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
              <span className="text-yellow-500">whoami</span>
            </div>
            <div className="pl-2 sm:pl-4 text-primary">_01x.arec1b0</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
              <span className="text-yellow-500">cat</span>
              <span className="text-primary">about.txt</span>
            </div>
            <div className="pl-2 sm:pl-4 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Blockchain Cryptographer</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Smart Contracts Auditor</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4" />
                <span>Cybersecurity Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
              <span className="text-yellow-500">echo</span>
              <span className="text-primary">"Show some fu_ck1nG adaptability!"</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-500">[01x.arec1b0@peopay ~]$</span>
              <span className="text-yellow-500">nc</span>
              <span className="text-primary">-lvnp 4444</span>
            </div>
            <div className="pl-4 opacity-80">
              listening on [192.168.1.100] 4444 ...
            </div>
            <div className="pl-4 animate-pulse">
              connect to [192.168.1.100] from (UNKNOWN) [192.168.1.1] 52431
            </div>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
});