interface Props {
  onPlay: () => void;
  onStop: () => void;
}

export const PlayControls = ({ onPlay, onStop }: Props) => (
  <div className="flex gap-3">
    <button
      onClick={onPlay}
      className="flex-1 py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-xl"
    >
      ▶ Play
    </button>
    <button
      onClick={onStop}
      className="flex-1 py-5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg text-xl"
    >
      ■ Stop
    </button>
  </div>
);
