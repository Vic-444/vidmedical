// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vidmedical.com',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 4721,
  },
});
