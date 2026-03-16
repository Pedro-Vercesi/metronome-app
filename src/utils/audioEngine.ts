// audioEngine.ts - Manejo de audio para el metrónomo

let audioContext: AudioContext | null = null;

// Inicializar el contexto de audio
export const initAudio = (): AudioContext => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};

// Reproducir un click
export const playClick = (isAccent: boolean = false) => {
  const context = initAudio();

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  // Frecuencia: más aguda para acento, más grave para beat normal
  oscillator.frequency.value = isAccent ? 1200 : 800;

  // Volumen: más fuerte para acento
  gainNode.gain.setValueAtTime(isAccent ? 0.8 : 0.5, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.05);

  // Conectar nodos
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  // Reproducir
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.05);
};
