import { memo } from 'react';
import { Timer } from '@/components/sections/GetStarted/Timer';
import { NotificationForm } from '@/components/sections/GetStarted/NotificationForm';
import { Rocket, Stars } from 'lucide-react';

export const GetStartedPage = memo(function GetStartedPage() {
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
              <Rocket className="h-16 w-16 text-primary animate-float" />
              <Stars className="absolute -right-4 -top-4 h-6 w-6 text-primary/60 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            Coming Soon
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're working hard to bring you something amazing. Stay tuned!
          </p>

          <Timer targetDate="2024-06-01" />
          
          <div className="max-w-md mx-auto">
            <NotificationForm />
          </div>
        </div>
      </div>
    </section>
  );
});