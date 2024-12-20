import { memo } from 'react';

export const InitiativesHeader = memo(function InitiativesHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Core Initiatives</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Exploring innovative solutions to empower decentralized communities through cutting-edge blockchain technology
      </p>
    </div>
  );
});