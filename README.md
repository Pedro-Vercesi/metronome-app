# Metrónomo Lite

A modern web-based metronome built with React, TypeScript, and the Web Audio API.

🔗 **Live Demo:** [https://metronome-lite.netlify.app](https://metronome-lite.netlify.app)

## Features

- ✅ Adjustable tempo (40-240 BPM)
- ✅ Multiple time signatures (2/4, 3/4, 4/4)
- ✅ Visual beat indicators
- ✅ Tap tempo functionality
- ✅ Accent on first beat
- ✅ Real-time tempo changes while playing
- ✅ Precise timing using Web Audio API

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Web Audio API** - High-precision audio timing

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TU_USUARIO/metronome-app.git

# Navigate to project directory
cd metronome-app

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
metronome-app/
├── src/
│   ├── components/        # React components
│   │   ├── MetronomeDisplay.tsx
│   │   ├── TimeSignature.tsx
│   │   ├── TempoControls.tsx
│   │   ├── TapTempo.tsx
│   │   └── PlayControls.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useMetronome.ts
│   ├── utils/            # Utility functions
│   │   ├── audioEngine.ts
│   │   └── timeSignatures.ts
│   └── App.tsx           # Main app component
├── public/
└── package.json
```

## How It Works

The metronome uses a **scheduler-based approach** with the Web Audio API to ensure precise timing:

1. A scheduler runs every 25ms checking if notes need to be scheduled
2. Notes are programmed ahead using `AudioContext.currentTime`
3. This eliminates the timing drift common with `setInterval`
4. The approach is based on [Chris Wilson's guide](https://web.dev/audio-scheduling/)

## Future Enhancements

- [ ] Custom time signature builder
- [ ] Subdivision options (eighth notes, triplets)
- [ ] Preset tempo names (Largo, Allegro, etc.)
- [ ] Dark mode
- [ ] Keyboard shortcuts

## Author

**Pedro Vercesi**

- Orchestral conductor transitioning to web development

## License

MIT License - feel free to use this project for learning or inspiration.
