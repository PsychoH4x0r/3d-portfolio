import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/3d-portfolio/",  // Pastikan ini sesuai dengan nama repo GitHub Pages lo
  plugins: [react()],
});
