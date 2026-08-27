// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://mtlab1122.github.io/portfolio',
  base: '/portfolio',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
