interface Props {
  bpm: number;
  currentBeat: number;
  beats: number;
  className?: string;
}

export const MetronomeDisplay = ({
  bpm,
  currentBeat,
  beats,
  className,
}: Props) => {
  const beatsArray = Array.from({ length: beats }, (_, i) => i + 1);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Label TEMPO */}
      <p className="text-xs text-muted-text tracking-widest uppercase mb-2">
        Tempo
      </p>

      {/* BPM Display - Número grande con glow */}
      <div className="relative mb-2">
        <p className="text-8xl font-bold text-neon-cyan drop-shadow-[0_0_30px_rgba(0,217,255,0.8)]">
          {bpm}
        </p>
      </div>

      {/* Label BPM */}
      <p className="text-sm text-muted-text tracking-wider mb-8">BPM</p>

      {/* Círculos de beat con efecto neón */}
      <div className="flex gap-4">
        {beatsArray.map((beatNumber) => (
          <div
            key={beatNumber}
            className={`w-5 h-5 rounded-full transition-all duration-100 ${
              beatNumber === currentBeat
                ? "bg-neon-magenta shadow-neon-magenta scale-125"
                : "bg-dark-bg border-2 border-muted-text/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
