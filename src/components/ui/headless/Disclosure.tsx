import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface DisclosureContextType {
  isOpen: boolean;
  toggle: () => void;
}

const DisclosureContext = createContext<DisclosureContextType | undefined>(undefined);

interface DisclosureProps {
  children: (context: DisclosureContextType) => ReactNode;
  defaultOpen?: boolean;
}

export function Disclosure({ children, defaultOpen = false }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <DisclosureContext.Provider value={{ isOpen, toggle }}>
      {children({ isOpen, toggle })}
    </DisclosureContext.Provider>
  );
}

export function useDisclosure() {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error('useDisclosure must be used within a Disclosure component');
  }
  return context;
}