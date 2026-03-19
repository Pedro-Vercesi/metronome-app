interface Props {
  onPlay: () => void;
  onStop: () => void;
}

export const PlayControls = ({ onPlay, onStop }: Props) => (
  <div className="flex gap-4">
    <button
      onClick={onPlay}
      className="flex-1 py-5 bg-neon-green/10 border-2 border-neon-green 
                 text-neon-green font-bold rounded-lg text-xl
                 shadow-neon-green hover:bg-neon-green/20 hover:scale-105
                 transition-all duration-200"
    >
      ▶ PLAY
    </button>
    <button
      onClick={onStop}
      className="flex-1 py-5 bg-neon-red/10 border-2 border-neon-red 
                 text-neon-red font-bold rounded-lg text-xl
                 shadow-neon-red hover:bg-neon-red/20 hover:scale-105
                 transition-all duration-200"
    >
      ■ STOP
    </button>
  </div>
);
