import { memo } from 'react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypingText = memo(function TypingText({ 
  text, 
  speed,
  className 
}: TypingTextProps) {
  const { displayedText } = useTypingEffect(text, speed);
  
  return <span className={className}>{displayedText}</span>;
});