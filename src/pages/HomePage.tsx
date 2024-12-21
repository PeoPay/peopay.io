import { Hero } from '@/components/sections/Hero/Hero';
import { Solution } from '@/components/sections/Solution/Solution';
import { CombinedSection } from '@/components/sections/CombinedSection/CombinedSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Solution />
      <CombinedSection />
    </>
  );
}