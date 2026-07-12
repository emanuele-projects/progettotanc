import type { Post } from '../lib/wp';

/**
 * Articoli placeholder usati quando WP_API_URL non è configurata.
 * Stessa shape dei post mappati da WordPress: quando il blog headless
 * sarà attivo, questi spariranno dalla build senza toccare le pagine.
 */
export const mockPosts: Post[] = [
  {
    slug: 'vendere-l-azienda-quando-e-il-momento-giusto',
    title: 'Vendere l’azienda: quando è il momento giusto',
    excerpt:
      'Il valore di un’impresa non è una fotografia: è una traiettoria. Capire in quale punto della curva ci si trova è la prima decisione di ogni operazione di cessione.',
    contentHtml:
      '<p>Il valore di un’impresa non è una fotografia: è una traiettoria. Capire in quale punto della curva ci si trova è la prima decisione di ogni operazione di cessione.</p><p>Questo è un articolo dimostrativo: quando il blog WordPress sarà collegato, qui compariranno gli articoli reali pubblicati dalla redazione.</p><p><em>TODO-CONTENUTO: articolo placeholder.</em></p>',
    date: new Date('2026-06-18'),
    author: 'Redazione',
    featuredImage: { url: '/images/stock/skyline.jpg', alt: 'Skyline di un distretto finanziario' },
  },
  {
    slug: 'passaggio-generazionale-tre-errori-da-evitare',
    title: 'Passaggio generazionale: tre errori da evitare',
    excerpt:
      'Rimandare, non scrivere le regole, confondere eredità e guida: i tre errori che vediamo più spesso nelle imprese familiari — e come si prevengono.',
    contentHtml:
      '<p>Rimandare, non scrivere le regole, confondere eredità e guida: i tre errori che vediamo più spesso nelle imprese familiari — e come si prevengono.</p><p>Questo è un articolo dimostrativo: quando il blog WordPress sarà collegato, qui compariranno gli articoli reali pubblicati dalla redazione.</p><p><em>TODO-CONTENUTO: articolo placeholder.</em></p>',
    date: new Date('2026-05-30'),
    author: 'Redazione',
    featuredImage: { url: '/images/stock/news-pen.jpg', alt: 'Penna stilografica su documenti' },
  },
  {
    slug: 'capitali-dal-golfo-cosa-cercano-gli-investitori',
    title: 'Capitali dal Golfo: cosa cercano gli investitori',
    excerpt:
      'Family office e fondi sovrani guardano al Made in Italy con interesse crescente. Ma le regole d’ingaggio sono diverse: ecco cosa preparare prima di sedersi al tavolo.',
    contentHtml:
      '<p>Family office e fondi sovrani guardano al Made in Italy con interesse crescente. Ma le regole d’ingaggio sono diverse: ecco cosa preparare prima di sedersi al tavolo.</p><p>Questo è un articolo dimostrativo: quando il blog WordPress sarà collegato, qui compariranno gli articoli reali pubblicati dalla redazione.</p><p><em>TODO-CONTENUTO: articolo placeholder.</em></p>',
    date: new Date('2026-05-12'),
    author: 'Redazione',
    featuredImage: { url: '/images/stock/district.jpg', alt: 'Quartiere direzionale al tramonto' },
  },
];
