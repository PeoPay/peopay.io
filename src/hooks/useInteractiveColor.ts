import { useCallback, useState } from 'react';

interface InteractiveColorOptions {
  baseHue?: number;
  baseSaturation?: number;
  baseLightness?: number;
  hueRange?: number;
  saturationRange?: number;
  lightnessRange?: number;
  alpha?: number;
}

export function useInteractiveColor({
  baseHue = 220,
  baseSaturation = 80,
  baseLightness = 15,
  hueRange = 30,
  saturationRange = 10,
  lightnessRange = 10,
  alpha = 0.85,
}: InteractiveColorOptions = {}) {
  const [color, setColor] = useState(
    `hsla(${baseHue}, ${baseSaturation}%, ${baseLightness}%, ${alpha})`
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    // Smoother transitions with eased values
    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const xEased = easeInOut(x);
    const yEased = easeInOut(y);
    
    const hue = baseHue + (xEased * hueRange);
    const saturation = baseSaturation + (xEased * saturationRange);
    const lightness = baseLightness + (yEased * lightnessRange);
    
    setColor(`hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
  }, [baseHue, baseSaturation, baseLightness, hueRange, saturationRange, lightnessRange, alpha]);

  const handleMouseLeave = useCallback(() => {
    setColor(`hsla(${baseHue}, ${baseSaturation}%, ${baseLightness}%, ${alpha})`);
  }, [baseHue, baseSaturation, baseLightness, alpha]);

  return { color, handleMouseMove, handleMouseLeave };
}