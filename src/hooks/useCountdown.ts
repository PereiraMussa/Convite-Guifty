import { useEffect, useState } from "react";

interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function computeRemaining(target: Date): CountdownValue {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isComplete: false };
}

export function useCountdown(target: Date): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() => computeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(computeRemaining(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return value;
}
