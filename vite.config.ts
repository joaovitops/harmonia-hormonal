import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // caminhos relativos — funciona no GitHub Pages em qualquer nome de repositório
  base: "./",
  plugins: [react(), tailwindcss()],
});
