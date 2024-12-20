import { memo, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { COLORS } from '@/lib/constants/colors';
import { ANIMATIONS } from '@/lib/constants/animations';

interface LogoIconProps {
  className?: string;
  animate?: boolean;
}

export const LogoIcon = memo(function LogoIcon({ 
  className, 
  animate = true 
}: LogoIconProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate || !svgRef.current) return;

    const svg = svgRef.current;
    const people = svg.querySelectorAll('.person');
    const lines = svg.querySelectorAll('.connection');
    const checks = svg.querySelectorAll('.check');

    const reset = () => {
      people.forEach(person => {
        person.style.opacity = '0';
        person.style.transform = 'translateY(10px)';
      });
      lines.forEach(line => {
        line.style.strokeDashoffset = '100';
      });
      checks.forEach(check => {
        check.style.opacity = '0';
        check.style.transform = 'scale(0.8)';
      });
    };

    const animateElements = () => {
      reset();

      people.forEach((person, index) => {
        setTimeout(() => {
          person.style.transition = `all ${ANIMATIONS.duration.normal} ${ANIMATIONS.timing.bounce}`;
          person.style.opacity = '1';
          person.style.transform = 'translateY(0)';
        }, index * 200);
      });

      setTimeout(() => {
        lines.forEach(line => {
          line.style.transition = `stroke-dashoffset ${ANIMATIONS.duration.slow} ${ANIMATIONS.timing.smooth}`;
          line.style.strokeDashoffset = '0';
        });
      }, 600);

      setTimeout(() => {
        checks.forEach((check, index) => {
          setTimeout(() => {
            check.style.transition = `all ${ANIMATIONS.duration.normal} ${ANIMATIONS.timing.bounce}`;
            check.style.opacity = '1';
            check.style.transform = 'scale(1)';
          }, index * 150);
        });
      }, 1000);
    };

    animateElements();
    svg.addEventListener('mouseenter', animateElements);

    return () => {
      svg.removeEventListener('mouseenter', animateElements);
    };
  }, [animate]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-300 hover:scale-105", className)}
      style={{ color: COLORS.primary.DEFAULT }}
    >
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill={COLORS.primary.transparent}
        className="transition-all duration-300 hover:fill-opacity-20"
      />
      
      <g fill="currentColor">
        <g className="person">
          <circle cx="50" cy="25" r="8" />
          <path 
            d="M42 45C42 40 46 35 50 35C54 35 58 40 58 45" 
            strokeLinecap="round"
            stroke="currentColor"
          />
        </g>
        
        <g className="person">
          <circle cx="25" cy="60" r="8" />
          <path 
            d="M17 80C17 75 21 70 25 70C29 70 33 75 33 80" 
            strokeLinecap="round"
            stroke="currentColor"
          />
        </g>
        
        <g className="person">
          <circle cx="75" cy="60" r="8" />
          <path 
            d="M67 80C67 75 71 70 75 70C79 70 83 75 83 80" 
            strokeLinecap="round"
            stroke="currentColor"
          />
        </g>
      </g>
      
      <g stroke="currentColor" strokeWidth="2">
        <path
          className="connection"
          d="M50 33L25 52"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
        <path
          className="connection"
          d="M50 33L75 52"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </g>
      
      <g className="check">
        <circle 
          cx="35" 
          cy="70" 
          r="10" 
          fill={COLORS.primary.transparent}
        />
        <path
          d="M30 70L33 73L40 66"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      <g className="check">
        <circle 
          cx="65" 
          cy="70" 
          r="10" 
          fill={COLORS.primary.transparent}
        />
        <path
          d="M60 70L63 73L70 66"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
});