import type { Post } from '../lib/wp';
import { url } from '../lib/url';

/**
 * Articoli redazionali definitivi, scritti fuori da WordPress.
 *
 * A differenza di `mock-posts.ts` (segnaposto che spariscono appena il blog
 * headless è attivo) questi restano pubblicati anche a WordPress collegato:
 * `wp.ts` li unisce agli articoli della redazione. Se in futuro la redazione
 * pubblica un articolo con lo stesso slug, la versione WordPress vince.
 *
 * Fonte: «FRP — Copy definitivi per la messa in pagina», sezione News.
 */
export const editorialPosts: Post[] = [
  {
    slug: 'sede-legale-all-estero',
    title: 'La sede legale all’estero: quando è considerata vera',
    excerpt:
      'Costituire una società fuori dall’Italia richiede pochi giorni e pochi documenti. È il motivo per cui in tanti lo fanno — e il motivo per cui in tanti se ne pentono.',
    contentHtml: [
      '<p>Aprire una società all’estero è, sulla carta, semplice. Si sceglie il paese, si costituisce, si ottiene l’iscrizione al registro delle imprese locale. Da quel momento esiste una società straniera, con un suo certificato e un suo numero.</p>',
      '<p>Il punto è che quel certificato dice dove la società è <em>iscritta</em>. Non dice dove la società <em>vive</em>. E per il fisco italiano conta la seconda cosa.</p>',

      '<h2>La regola, semplificata</h2>',
      '<p>Una società si considera fiscalmente residente in Italia se in Italia si trova la sua direzione effettiva o la gestione ordinaria in via principale — cioè se le decisioni che contano si prendono qui. Non importa dove sia la sede legale. Se gli amministratori operano da Torino, i contratti si negoziano da Torino e le scelte strategiche maturano a Torino, quella società è italiana, anche se il certificato dice altro.</p>',
      '<p>Le conseguenze di una riqualificazione non sono formali: tassazione in Italia dei redditi mondiali, recupero delle imposte per le annualità aperte, sanzioni, obblighi dichiarativi mai assolti. E il contenzioso, sempre, arriva anni dopo — quando la struttura ha già prodotto tutti i suoi effetti.</p>',

      '<h2>Cosa rende una sede estera difendibile</h2>',
      '<ul>',
      '<li><strong>Una ragione economica reale.</strong> Un mercato da servire, clienti da seguire, competenze da reperire, una filiera da presidiare. Se l’unica ragione è l’aliquota, la struttura è fragile per definizione.</li>',
      '<li><strong>Decisioni prese sul posto.</strong> Amministratori che risiedono e operano nel paese, consigli che si tengono lì, corrispondenza e delibere che lo dimostrano.</li>',
      '<li><strong>Sostanza operativa.</strong> Uffici, persone, contratti, costi. Una società senza dipendenti, senza spazi e senza attività non è una sede: è un indirizzo.</li>',
      '<li><strong>Rapporti bancari attivi.</strong> Aprire il conto è oggi l’ostacolo che ferma più progetti, ed è anche il primo indizio che gli istituti guardano per capire se l’attività è vera.</li>',
      '<li><strong>Documentazione ordinata.</strong> Tutto quanto sopra deve essere dimostrabile a distanza di anni. La difesa di una struttura si costruisce quando la si crea, non quando arriva la verifica.</li>',
      '</ul>',

      '<p>La domanda giusta, quindi, non è <em>come faccio ad avere una sede all’estero</em>. È <em>cosa vado a farci</em>. Da quella risposta discende tutto: il paese, la forma societaria, chi amministra, quanto costa mantenerla.</p>',
      '<p>Costituire una società all’estero è facile. Renderla solida e difendibile è un’altra cosa — ed è lì che serviamo.</p>',

      `<p><a href="${url('/servizi/internazionalizzazione/')}">Scopri il servizio Internazionalizzazione →</a></p>`,
    ].join(''),
    metaDescription:
      'Iscrizione all’estero e residenza fiscale non coincidono. Cosa rende difendibile una sede estera: sostanza operativa, decisioni sul posto, documentazione.',
    date: new Date('2026-08-04'),
    author: 'Redazione',
    featuredImage: {
      url: '/images/stock/internazionale.jpg',
      alt: 'Sede direzionale di un hub finanziario internazionale',
    },
  },
];
