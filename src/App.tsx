import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Web3Provider } from '@/providers/Web3Provider';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { GetStartedPage } from '@/pages/GetStartedPage';
import { RoadSoFarPage } from '@/pages/RoadSoFarPage';
import { AuthorPage } from '@/pages/AuthorPage';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trackPageView } from '@/lib/utils/analytics';

const queryClient = new QueryClient();

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'get-started' | 'author' | 'road'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#get-started') {
        setCurrentPage('get-started');
      } else if (hash === '#author') {
        setCurrentPage('author');
      } else if (hash === '#road') {
        setCurrentPage('road');
      } else {
        setCurrentPage('home');
      }
      // Track page view when hash changes
      trackPageView(window.location.pathname + window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check and tracking

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Web3Provider>
          <Layout>
            {currentPage === 'get-started' ? (
              <GetStartedPage />
            ) : currentPage === 'author' ? (
              <AuthorPage />
            ) : currentPage === 'road' ? (
              <RoadSoFarPage />
            ) : (
              <HomePage />
            )}
          </Layout>
        </Web3Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}