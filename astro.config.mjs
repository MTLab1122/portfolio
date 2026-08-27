// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://mtlab1122.github.io/portfolio' : 'http://localhost:4321',
  base: isGitHubPages ? '/portfolio' : '/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
