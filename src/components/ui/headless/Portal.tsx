import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export function Portal({ children, container }: PortalProps) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : null;
}