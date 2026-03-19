interface Props {
  timeSignature: string;
  onChange: (timeSignature: string) => void;
}

export const TimeSignature = ({ timeSignature, onChange }: Props) => {
  return (
    <div className="mb-6">
      <label className="block text-xs text-muted-text tracking-widest uppercase mb-3">
        Compás
      </label>
      <div className="flex gap-3">
        <button
          onClick={() => onChange("2/4")}
          className={`flex-1 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
            timeSignature === "2/4"
              ? "bg-neon-purple/20 border-2 border-neon-purple/60 text-light-text shadow-neon-purple"
              : "bg-dark-bg/50 text-muted-text border-2 border-muted-text/30 hover:border-neon-purple/50 hover:text-light-text"
          }`}
        >
          2/4
        </button>
        <button
          onClick={() => onChange("3/4")}
          className={`flex-1 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
            timeSignature === "3/4"
              ? "bg-neon-purple/20 border-2 border-neon-purple/60 text-light-text shadow-neon-purple"
              : "bg-dark-bg/50 text-muted-text border-2 border-muted-text/30 hover:border-neon-purple/50 hover:text-light-text"
          }`}
        >
          3/4
        </button>
        <button
          onClick={() => onChange("4/4")}
          className={`flex-1 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
            timeSignature === "4/4"
              ? "bg-neon-purple/20 border-2 border-neon-purple/60 text-light-text shadow-neon-purple"
              : "bg-dark-bg/50 text-muted-text border-2 border-muted-text/30 hover:border-neon-purple/50 hover:text-light-text"
          }`}
        >
          4/4
        </button>
      </div>
    </div>
  );
};
