import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BannerProps {
  className?: string;
}

export const Banner = memo(function Banner({ className }: BannerProps) {
  return (
    <div 
      className={cn(
        "relative w-full aspect-[2.7/1] overflow-hidden",
        "bg-gradient-to-r from-[#2B4C7E] to-[#1a2d4b]",
        className
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 py-8 flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white/90">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center shadow-lg">
              <span className="text-[#2B4C7E] text-2xl font-bold">P</span>
            </div>
            <span className="text-2xl font-bold font-montserrat">PeoPay</span>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-montserrat leading-tight">
              Empowering Communities Through Blockchain Unity
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              Join us in creating an inclusive financial ecosystem that breaks down barriers and fosters global collaboration.
            </p>
          </div>

          {/* CTA */}
          <Button 
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2B4C7E] font-semibold group"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
});