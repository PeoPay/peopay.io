import { Hero } from '@/components/sections/Hero/Hero';
import { Features } from '@/components/sections/Features/Features';
import { Solution } from '@/components/sections/Solution/Solution';
import { Education } from '@/components/sections/Education/Education';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Solution />
      <Education />
    </>
  );
}