import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://crazy-jack.github.io',
  base: '/Claw-Machine-University-Website',
});
