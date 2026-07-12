# Fulvio Rossi Plus — sito istituzionale

Sito statico **Astro 5 + GSAP**, doppio tema (light bianco+oro per la home consulting, dark navy+oro per `/mentoria`), predisposto per blog **WordPress headless**.

## Comandi

```bash
npm install       # prima volta
npm run dev       # sviluppo su http://localhost:4321
npm run build     # build statica in dist/
npm run preview   # anteprima della build
npm run check     # type-check dei componenti Astro
```

## Struttura

- `src/styles/tokens.css` — design token dei due temi (`[data-theme="light|dark"]`). I componenti usano SOLO variabili semantiche.
- `src/data/*.ts` — contenuti strutturati (servizi, sedi, team, recensioni…). I placeholder da sostituire sono marcati `TODO-CONTENUTO`.
- `src/lib/wp.ts` — livello dati del blog: con `WP_API_URL` vuota usa i mock, altrimenti legge WordPress in fase di build.
- `src/pages/` — route: `/`, `/mentoria`, `/servizi/[slug]`, `/news`, `/news/[slug]`, `/contatti`, `404`.
- Tema per pagina: prop `theme` di `BaseLayout` (`light` default, `dark` per mentoria).

## Immagini

I segnaposto sono il componente `Placeholder.astro`. Quando arrivano le foto reali: metterle in `src/assets/` e usare `<Image>` di `astro:assets` (ridimensiona in build) — mai file pesanti in `public/`.

## Blog WordPress headless — come attivarlo

1. **Installare WordPress** sull'hosting in una sottocartella, es. `https://dominio.it/wp/` (la REST API è attiva di default: verificare `https://dominio.it/wp/wp-json/wp/v2/posts`).
2. **Locale**: copiare `.env.example` in `.env` e impostare `WP_API_URL=https://dominio.it/wp/wp-json/wp/v2`, poi `npm run build` — gli articoli reali sostituiscono i mock.
3. **Automazione** (quando il repo è su GitHub): configurare i secrets `WP_API_URL`, `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` e attivare i trigger in `.github/workflows/deploy.yml`. Sul WordPress installare un plugin webhook (es. "WP Webhooks") che a ogni pubblicazione chiami l'API GitHub con `repository_dispatch` → `wp_publish`: il sito si ricostruisce e va online da solo in ~2-4 minuti.
4. La sync FTP carica `dist/` nella **root** del dominio ed **esclude `/wp/`**: il front-end resta statico e velocissimo, WordPress vive solo come redazione.

## Deploy manuale (senza CI)

`npm run build` e caricare il **contenuto** di `dist/` nella root dell'hosting via FTP (lasciando intatta l'eventuale cartella `/wp/`). Il file `public/.htaccess` è già incluso nella build (404 + cache).

## Go-live checklist

- [ ] Dominio reale in `astro.config.mjs` (`site`) e `public/robots.txt`
- [ ] Contatti reali in `src/data/site.ts` (email, telefono, indirizzo, P.IVA)
- [ ] Sostituire i `TODO-CONTENUTO` in `src/data/`
- [ ] Foto reali al posto dei `Placeholder`
- [ ] Form contatti: collegare un form service o endpoint WP (ora è mailto)
