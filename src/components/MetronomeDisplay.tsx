interface Props {
  bpm: number;
  currentBeat: number;
  beats: number;
}

export const MetronomeDisplay = ({ bpm, currentBeat, beats }: Props) => {
  const beatsArray = Array(beats)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-800">TEMPO</p>
      <p className="text-7xl text-gray-950">{bpm}</p>
      <p className="text-sm text-gray-800 mb-6">{bpm}</p>

      <div className="flex gap-3 justify-center">
        {beatsArray.map((beatNumber) => (
          <div
            key={beatNumber}
            className={`w-4 h-4 rounded-full ${
              beatNumber === currentBeat ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
