import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants/links';

export function HeroButtons() {
  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'get-started';
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90" asChild>
        <a href="#get-started" onClick={handleGetStarted}>
          Get Started
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <a 
          href={LINKS.documentation}
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          View Documentation
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </Button>
    </div>
  );
}