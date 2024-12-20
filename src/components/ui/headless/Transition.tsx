import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface TransitionProps {
  show: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  children: ReactNode;
}

export function Transition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  children,
}: TransitionProps) {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<'enter' | 'leave' | null>(null);

  useEffect(() => {
    if (show && !mounted) {
      setMounted(true);
      setStage('enter');
    } else if (!show && mounted) {
      setStage('leave');
    }
  }, [show, mounted]);

  if (!mounted) return null;

  const classes = stage === 'enter'
    ? `${enter} ${enterFrom} ${enterTo}`
    : stage === 'leave'
    ? `${leave} ${leaveFrom} ${leaveTo}`
    : '';

  return <div className={classes}>{children}</div>;
}