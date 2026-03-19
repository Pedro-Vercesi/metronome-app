interface Props {
  bpm: number;
  onChange: (newBpm: number) => void;
}

export const TempoControls = ({ bpm, onChange }: Props) => {
  return (
    <div className="mb-6">
      {/* Slider */}
      <div className="mb-6">
        <label className="block text-xs text-muted-text tracking-widest uppercase mb-3">
          Ajustar tempo (40-240 BPM)
        </label>
        <input
          type="range"
          min="40"
          max="240"
          value={bpm}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-dark-bg rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neon-cyan 
                     [&::-webkit-slider-thumb]:shadow-neon-cyan [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-neon-cyan [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-text mt-2">
          <span>40</span>
          <span>240</span>
        </div>
      </div>

      {/* Input Manual */}
      <div>
        <label className="block text-xs text-muted-text tracking-widest uppercase mb-3">
          Entrada manual
        </label>
        <input
          type="number"
          min="40"
          max="240"
          value={bpm}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full py-3 px-4 bg-dark-bg border-2 border-neon-cyan/30 rounded-lg 
                     text-center text-2xl font-bold text-light-text
                     focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan
                     transition-all duration-200"
        />
      </div>
    </div>
  );
};
