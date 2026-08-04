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
- `src/data/services.ts` — copy definitivi delle pagine servizio, nella struttura del documento «Copy definitivi per la messa in pagina» (apertura, punto di partenza, come lavoriamo, sezioni, FAQ, cosa resta, quando parlarne, meta).
- `src/data/shared-copy.ts` — elementi trasversali (callout, chiusure, micro-frasi) riusati su più pagine.
- `src/data/editorial-posts.ts` — articoli redazionali definitivi scritti fuori da WordPress: restano pubblicati anche a blog collegato.
- `src/lib/wp.ts` — livello dati del blog: con `WP_API_URL` vuota usa i mock, altrimenti legge WordPress in fase di build. In entrambi i casi unisce i redazionali di `editorial-posts.ts` (a parità di slug vince WordPress).
- `src/pages/` — route: `/`, `/mentoria`, `/servizi/[slug]`, `/news`, `/news/[slug]`, `/contatti`, `404`.
- Tema per pagina: prop `theme` di `BaseLayout` (`light` default, `dark` per mentoria).

## Marchio

`src/components/Logo.astro` è il marchio FR+ inline. I tracciati sono quelli originali ripuliti: il file di partenza simulava il gradiente con centinaia di poligoni (52 KB), qui sono due path (1 KB). Il riempimento è `currentColor`, così il marchio segue il contesto — bianco sull'header trasparente sopra l'hero navy, blu di brand (`--brand-blue`) sull'header bianco dopo lo scroll, bianco nel footer. Il lockup tiene **sempre** «FULVIO ROSSI PLUS» sotto al marchio.

`public/logo.svg` è la versione autonoma nel blu di brand (usi esterni, social); `public/favicon.svg` è il marchio su fondo navy.

## Immagini

Le pagine servizio usano le **scene illustrate di `BrandArt.astro`**, una per servizio tramite il campo `art`. Sono vettoriali: nitide a ogni dimensione, in palette, senza peso di rete. Le foto di `public/images/stock/` erano miniature da ~360px usate a tutta larghezza (sgranate) e fuori registro: restano solo come immagini di copertina degli articoli.

Per passare a fotografie vere su un servizio basta valorizzare `photo` in `src/data/services.ts`: se c'è, prevale sull'illustrazione. Metterle in `src/assets/` e usare `<Image>` di `astro:assets` (ridimensiona in build) — mai file pesanti in `public/`.

### Ritratti del team

I tre ritratti sono già referenziati in `src/data/team.ts` e vanno depositati in `public/images/team/` con questi nomi esatti:

| File | Persona |
| --- | --- |
| `fulvio-rossi.jpg` | Fulvio Rossi — Presidente & Co-fondatore |
| `carolina-rossi.jpg` | Carolina Rossi — Amministratore Delegato |
| `gerard-haoun.jpg` | Gerard Haoun — Vice Presidente & Co-fondatore |

Formato 4/5, lato lungo 1200px (le schede usano un ritaglio 4/5, la citazione in home un tondo da 72px). Se un file manca, `src/lib/assets.ts` lo rileva in fase di build e il componente ricade sul monogramma BrandArt: nessuna immagine rotta, e alla prima build utile il ritratto compare senza toccare il codice.

> **I tre ritratti attualmente in repo sono immagini generate con AI, non fotografie.** Sono state ritagliate a inquadratura ravvicinata (esclude piano di lavoro e contrassegno del generatore). Vanno sostituite con ritratti reali prima del go-live: sono presentate come foto di persone reali con nome e ruolo.

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

### Aperto dal documento copy (v2)

- [ ] **Servizio 07** — con sette servizi la griglia di `/servizi` passa da 3×2 a 3+3+1. O si arriva a otto voci, o la settima va trattata con un blocco a sé, come la Mentoria.
- [ ] **Blu del marchio e oro di brand** — il marchio FR+ è blu `#0067F3`, l'accento del sito è oro `#C2A35B` (più il blu CookGroup delle pagine light). Oggi convivono perché il marchio è monocromatico sui fondi navy e blu solo su bianco; se serve una linea unica, è una scelta di palette da fare.
- [ ] **Certificazioni (06)** — verificare quali schemi sono effettivamente presidiati. In attesa, sia il copy della pagina sia i badge di `src/data/why-us.ts` li indicano per ambito e non per sigla; a verifica fatta si possono riportare sigle e loghi degli enti accreditati.
- [ ] **Ritratti del team** — sostituire le immagini AI in `public/images/team/` con fotografie reali (vedi sopra).
- [ ] **Riga di ruolo di Gerard Haoun** in `src/data/team.ts` — da confermare con l'interessato.
- [x] **Meta description** — le meta fornite dal documento superavano i ~160 caratteri su cinque pagine servizio: accorciate mantenendo il senso, stessa passata su home e Team & Sedi.
