interface Props {
  bpm: number;
  onChange: (newBpm: number) => void;
}

export const TempoControls = ({ bpm, onChange }: Props) => {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-2">
          Ajustar tempo (40-240 BPM)
        </label>
        <input
          type="range"
          min="40"
          max="240"
          value={bpm}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg accent-blue-500"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>40</span>
          <span>240</span>
        </div>
      </div>

      {/* Input Manual */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Entrada manual
        </label>
        <input
          type="number"
          min="40"
          max="240"
          value={bpm}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold"
        />
      </div>
    </div>
  );
};
