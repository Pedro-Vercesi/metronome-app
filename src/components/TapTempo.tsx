import { useState } from "react";

interface Props {
  onTap: (bpm: number) => void;
}

export const TapTempo = ({ onTap }: Props) => {
  const [tapTimes, setTapTimes] = useState<number[]>([]);

  const handleTap = () => {
    const now = Date.now();
    const newTapTimes = [...tapTimes, now];

    if (newTapTimes.length > 4) {
      newTapTimes.shift();
    }

    setTapTimes(newTapTimes);

    if (newTapTimes.length < 2) return;

    const intervals: number[] = [];
    for (let i = 1; i < newTapTimes.length; i++) {
      intervals.push(newTapTimes[i] - newTapTimes[i - 1]);
    }

    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const bpm = Math.round(60000 / avgInterval);

    onTap(bpm);
  };

  return (
    <button
      onClick={handleTap}
      className="mt-5 w-full py-4 mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan 
                 text-light-text font-bold rounded-lg text-lg 
                 shadow-neon-purple hover:shadow-neon-cyan
                 transition-all duration-300 hover:scale-105
                 border-2 border-neon-cyan/50"
    >
      TAP TEMPO
    </button>
  );
};
