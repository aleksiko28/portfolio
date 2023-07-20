import { defineConfig } from "astro/config"

// https://astro.build/config
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  site: "https://aleksiko28.github.io",
  base: "/portfolio/",
  integrations: [svelte()],
  experimental: {
    assets: true,
  },
})
