import { memo } from 'react';
import { Check } from 'lucide-react';

interface InitiativeFeaturesProps {
  features: string[];
}

export const InitiativeFeatures = memo(function InitiativeFeatures({
  features,
}: InitiativeFeaturesProps) {
  return (
    <div className="flex-grow">
      <h4 className="font-semibold mb-4">Key Features:</h4>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});