import { memo } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = memo(function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow pt-24" role="main">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
});