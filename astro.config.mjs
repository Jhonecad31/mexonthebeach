
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mexonthebeach.vercel.app',
  output: 'server',
  adapter: vercel(),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});