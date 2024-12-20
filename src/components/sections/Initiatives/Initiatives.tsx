import { memo } from 'react';
import { InitiativesHeader } from './InitiativesHeader';
import { InitiativesList } from './InitiativesList';

export const Initiatives = memo(function Initiatives() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <InitiativesHeader />
        <InitiativesList />
      </div>
    </section>
  );
});