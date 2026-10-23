// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const siteUrl =
  process.env.SITE_URL ||
  (isGitHubPages
    ? 'https://mtlab1122.github.io/portfolio'
    : 'https://talha-portfolio-gules.vercel.app');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: isGitHubPages ? '/portfolio' : '/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
