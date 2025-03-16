import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/3d-portfolio/",  // Sesuai dengan repo GitHub Pages lo
  plugins: [react()],
});
