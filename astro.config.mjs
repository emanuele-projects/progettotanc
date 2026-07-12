// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO-CONTENUTO: impostare il dominio reale prima del go-live
export default defineConfig({
  site: 'https://www.fulviorossiplus.it',
  integrations: [sitemap()],
});
