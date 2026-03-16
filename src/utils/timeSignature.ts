// src/utils/timeSignatures.ts
export interface TimeSignatureConfig {
  display: string;
  beats: number; // Pulsos principales que se sienten
  subdivisionPerBeat: number; // Subdivisiones por cada pulso
}

export const TIME_SIGNATURES: Record<string, TimeSignatureConfig> = {
  "4/4": {
    display: "4/4",
    beats: 4,
    subdivisionPerBeat: 2, // Binaria (corcheas)
  },
  "3/4": {
    display: "3/4",
    beats: 3,
    subdivisionPerBeat: 2, // Binaria
  },
  "6/8": {
    display: "6/8",
    beats: 2,
    subdivisionPerBeat: 3, // Ternaria
  },
  "2/4": {
    display: "2/4",
    beats: 2,
    subdivisionPerBeat: 2, // Binaria
  },
};

export const DEFAULT_TIME_SIGNATURE = "4/4";
