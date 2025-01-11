import { memo } from 'react';
import { HeroButtons } from './HeroButtons';
import { Shield, Users, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Shield,
    title: "Easy and Fair Money for Everyone",
    description: "Everyone should have simple and fair tools to manage their money. Blockchain makes sending and saving money safe, quick, and affordable."
  },
  {
    icon: Users,
    title: "Bringing People Together",
    description: "Blockchain isn't just about money. It connects people everywhere, helping communities share resources and build strong relationships."
  },
  {
    icon: Coins,
    title: "Join Us Today",
    description: "Let's create a world where everyone has the tools they need to manage their money and improve their lives. Join us and make financial freedom possible for all."
  }
];

export const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="absolute inset-0 animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up space-y-16">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Empowering Communities with Blockchain
          </h1>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "group p-6 rounded-2xl transition-all duration-500",
                  "hover:bg-primary/5 hover:scale-105",
                  "border border-transparent hover:border-primary/20",
                  "relative overflow-hidden",
                )}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with animation */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-75 transition-transform duration-500 group-hover:scale-125" />
                  <feature.icon className="relative h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                
                {/* Content */}
                <div className="relative space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <HeroButtons />
        </div>
      </div>
    </section>
  );
});