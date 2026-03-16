import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <- AGREGAR

export default defineConfig({
  plugins: [react(), tailwindcss()], // <- AGREGAR tailwindcss()
});
