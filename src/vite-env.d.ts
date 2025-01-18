/// <reference types="vite/client" />

interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (...args: any[]) => Promise<any>;
  };
}