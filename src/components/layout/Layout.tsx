import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { OpeningEffect } from '../effects/OpeningEffect';
import type { ReactNode } from 'react';
import { InteractiveBackground } from '../effects/InteractiveBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <OpeningEffect />
      <InteractiveBackground />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}