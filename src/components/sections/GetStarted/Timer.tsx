import { memo, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TimeUnit {
  value: number;
  label: string;
}

interface TimerProps {
  targetDate: string;
}

export const Timer = memo(function Timer({ targetDate }: TimerProps) {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeUnits([
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {timeUnits.map(({ value, label }) => (
        <Card key={label} className="p-4 min-w-[100px]">
          <div className="text-3xl font-bold text-primary">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </Card>
      ))}
    </div>
  );
});