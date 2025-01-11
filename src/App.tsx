import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Web3Provider } from '@/providers/Web3Provider';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { GetStartedPage } from '@/pages/GetStartedPage';
import { RoadSoFarPage } from '@/pages/RoadSoFarPage';
import { AuthorPage } from '@/pages/AuthorPage';

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
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Web3Provider>
      <ThemeProvider>
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
      </ThemeProvider>
    </Web3Provider>
  );
}