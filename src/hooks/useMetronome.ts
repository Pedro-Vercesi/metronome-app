import { useState, useRef, useEffect, useCallback } from "react";
import { initAudio, playClick } from "../utils/audioEngine";

interface UseMetronomeReturn {
  isPlaying: boolean;
  currentBeat: number;
  start: () => void;
  stop: () => void;
}

export const useMetronome = (
  bpm: number,
  beats: number,
): UseMetronomeReturn => {
  // Acá va a ir todo el código que está en App
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // useRef para referencias que NO causan re-render
  const schedulerIdRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef(0);
  const currentBeatRef = useRef(1);
  const beatsRef = useRef(beats);
  const bpmRef = useRef(bpm);

  useEffect(() => {
    beatsRef.current = beats;
  }, [beats]);

  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  const start = useCallback(() => {
    const context = initAudio();

    const scheduler = () => {
      const context = initAudio();
      const secondsPerBeat = 60 / bpmRef.current; // ← Usar bpmRef.current

      while (nextNoteTimeRef.current < context.currentTime + 0.1) {
        playClick(currentBeatRef.current === 1);
        setCurrentBeat(currentBeatRef.current);

        currentBeatRef.current =
          currentBeatRef.current >= beatsRef.current
            ? 1
            : currentBeatRef.current + 1;

        nextNoteTimeRef.current += secondsPerBeat;
      }

      schedulerIdRef.current = window.setTimeout(scheduler, 25);
    };

    // Inicializar con el tempo actual
    nextNoteTimeRef.current = context.currentTime;
    currentBeatRef.current = 1;

    scheduler();
    setIsPlaying(true);
  }, []); // ← Ahora el array puede ser vacío porque usamos ref

  const stop = useCallback(() => {
    if (schedulerIdRef.current) {
      clearTimeout(schedulerIdRef.current);
    }
    setIsPlaying(false);
    setCurrentBeat(1);
  }, []);

  return {
    isPlaying,
    currentBeat,
    start,
    stop,
  };
};
