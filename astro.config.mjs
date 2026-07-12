// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO-CONTENUTO: impostare il dominio reale prima del go-live.
// DEPLOY_SITE/DEPLOY_BASE vengono impostate dalla CI (es. GitHub Pages
// builda con base /sitotanc/); in locale e sull'hosting finale restano
// i default (root).
export default defineConfig({
  site: process.env.DEPLOY_SITE ?? 'https://www.fulviorossiplus.it',
  base: process.env.DEPLOY_BASE ?? '/',
  integrations: [sitemap()],
});
