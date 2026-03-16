import { useState } from "react";

interface Props {
  onTap: (bpm: number) => void;
}

export const TapTempo = ({ onTap }: Props) => {
  const [tapTimes, setTapTimes] = useState<number[]>([]);

  const handleTap = () => {
    const now = Date.now();
    if (tapTimes.length > 0 && now - tapTimes[tapTimes.length - 1] > 3000) {
      setTapTimes([now]);
      return;
    }

    const newTapTimes = [...tapTimes, now];

    // Mantener solo los últimos 4 taps
    if (newTapTimes.length > 4) {
      newTapTimes.shift();
    }

    setTapTimes(newTapTimes);

    // Necesitamos al menos 2 taps para calcular
    if (newTapTimes.length < 2) return;

    // Calcular intervalos entre taps
    const intervals: number[] = [];
    for (let i = 1; i < newTapTimes.length; i++) {
      intervals.push(newTapTimes[i] - newTapTimes[i - 1]);
    }

    // Promedio de intervalos en ms
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;

    // Convertir a BPM: (60000 ms/min) / (ms por beat) = beats/min
    const bpm = Math.round(60000 / avgInterval);

    // Comunicar a App
    onTap(bpm);
  };

  return (
    <button
      onClick={handleTap}
      className="mt-5 w-full py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-lg"
    >
      TAP TEMPO
    </button>
  );
};
