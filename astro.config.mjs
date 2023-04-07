import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // need this since deploying to GH pages
  base: '/brotips',
  integrations: [tailwind()],
});
