import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { GetStartedPage } from '@/pages/GetStartedPage';
import { AuthorPage } from '@/pages/AuthorPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'get-started' | 'author'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#get-started') {
        setCurrentPage('get-started');
      } else if (hash === '#author') {
        setCurrentPage('author');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        {currentPage === 'get-started' ? (
          <GetStartedPage /> 
        ) : currentPage === 'author' ? (
          <AuthorPage />
        ) : (
          <HomePage />
        )}
      </Layout>
    </ThemeProvider>
  );
}