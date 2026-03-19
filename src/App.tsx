import { useState } from "react";
import { MetronomeDisplay } from "./components/MetronomeDisplay";
import { TimeSignature } from "./components/TimeSignature";
import { TIME_SIGNATURES } from "./utils/timeSignature";
import { TempoControls } from "./components/TempoControls";
import { PlayControls } from "./components/PlayControls";
import { TapTempo } from "./components/TapTempo";

import { useMetronome } from "./hooks/useMetronome";

function App() {
  const [bpm, setBpm] = useState<number>(120);
  const [timeSignature, setTimeSignature] = useState<string>("2/4");

  const beats = TIME_SIGNATURES[timeSignature].beats;

  const { currentBeat, start, stop } = useMetronome(bpm, beats);

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-8">
      <div className="bg-dark-card rounded-2xl shadow-2xl p-8 max-w-md w-full border-2 border-neon-cyan/30">
        <h1 className="text-3xl font-bold text-center mb-8 text-light-text">
          Metrónomo Web
        </h1>

        <MetronomeDisplay bpm={bpm} currentBeat={currentBeat} beats={beats} />
        <TimeSignature
          timeSignature={timeSignature}
          onChange={setTimeSignature}
        />
        <TempoControls bpm={bpm} onChange={setBpm} />
        <PlayControls onPlay={start} onStop={stop} />
        <TapTempo onTap={setBpm} />
      </div>
    </div>
  );
}

export default App;
