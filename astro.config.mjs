import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://lopez-eguiluz-ltda.github.io/",
  base: "/centroamai.cl/",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
