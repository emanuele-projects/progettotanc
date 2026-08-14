import type { Post } from '../lib/wp';
import { url } from '../lib/url';

/**
 * Articoli redazionali, scritti fuori da WordPress.
 *
 * Restano pubblicati anche a blog headless collegato: `wp.ts` li unisce agli
 * articoli della redazione e, se in futuro ne viene pubblicato uno con lo
 * stesso slug, la versione WordPress vince.
 *
 * Il primo articolo viene da «FRP — Copy definitivi per la messa in pagina»,
 * sezione News; gli altri sviluppano i titoli già previsti in scaletta.
 */

const link = (href: string, label: string) =>
  `<p><a href="${url(href)}">${label} →</a></p>`;

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
      '<p>Una società si considera fiscalmente residente in Italia se in Italia si trova la sua direzione effettiva o la gestione ordinaria in via principale — cioè se le decisioni che contano si prendono qui. Non importa dove sia la sede legale. Se gli amministratori operano da Milano, i contratti si negoziano da Milano e le scelte strategiche maturano a Milano, quella società è italiana, anche se il certificato dice altro.</p>',
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

      link('/servizi/internazionalizzazione/', 'Scopri il servizio Internazionalizzazione'),
    ].join(''),
    metaDescription:
      'Iscrizione all’estero e residenza fiscale non coincidono. Cosa rende difendibile una sede estera: sostanza operativa, decisioni sul posto, documentazione.',
    date: new Date('2026-08-04'),
    author: 'Redazione',
    featuredImage: {
      url: '/images/sezioni/blog-sede-estera.jpg',
      alt: 'Torri direzionali di vetro di un distretto d\u2019affari',
    },
  },

  {
    slug: 'vendere-l-azienda-quando-e-il-momento-giusto',
    title: 'Vendere l’azienda: quando è il momento giusto',
    excerpt:
      'Il valore di un’impresa non è una fotografia: è una traiettoria. Capire in quale punto della curva ci si trova è la prima decisione di ogni operazione di cessione.',
    contentHtml: [
      '<p>La domanda arriva quasi sempre nello stesso modo: «Secondo lei, è il momento di vendere?». E quasi sempre arriva tardi — dopo una stanchezza, dopo un’offerta inattesa, dopo un anno andato male.</p>',
      '<p>Il momento giusto, però, non si riconosce dallo stato d’animo di chi vende. Si riconosce dalla curva su cui l’azienda si trova.</p>',

      '<h2>Il valore è una traiettoria</h2>',
      '<p>Chi compra non paga il bilancio dell’anno scorso: paga quello che crede l’azienda farà nei prossimi cinque. Per questo due imprese con lo stesso fatturato possono valere una il doppio dell’altra. Conta la direzione: margini che salgono o scendono, clienti che si concentrano o si diversificano, un mercato che si allarga o che si stringe.</p>',
      '<p>Vendere sul picco è raro, e in buona parte è fortuna. Vendere in salita, invece, è una scelta: si rinuncia a un pezzo di crescita futura in cambio di un prezzo che quella crescita la incorpora già.</p>',

      '<h2>I segnali che il momento si sta avvicinando</h2>',
      '<ul>',
      '<li><strong>La crescita richiede capitali che non volete più rischiare.</strong> L’azienda potrebbe fare il salto, ma il salto lo garantite voi, con il patrimonio personale.</li>',
      '<li><strong>Il settore si sta consolidando.</strong> Quando i concorrenti cominciano a comprarsi tra loro, chi resta solo tratta da una posizione più debole a ogni anno che passa.</li>',
      '<li><strong>Vi hanno cercati.</strong> Un compratore che bussa è un’informazione, non un’offerta: significa che il vostro settore è sotto osservazione.</li>',
      '<li><strong>La seconda linea è pronta — oppure non ci sarà.</strong> Un’azienda che non dipende da voi vale di più. Se la successione interna non c’è, il tempo gioca contro.</li>',
      '<li><strong>Il ciclo è favorevole.</strong> I multipli non sono una costante: si muovono con il credito, con i tassi e con l’appetito degli investitori.</li>',
      '</ul>',

      '<h2>Quello che si può ancora fare</h2>',
      '<p>Tra la decisione e la firma passano in genere dodici-ventiquattro mesi. È in quella finestra che si costruisce il prezzo: numeri riconciliati, contratti formalizzati, dipendenza dal fondatore ridotta, perimetro societario leggibile in fretta. Ogni zona d’ombra che resta, al tavolo, diventa uno sconto.</p>',
      '<p>Per questo la risposta onesta alla domanda iniziale non è quasi mai «sì» o «no». È: parliamone adesso, così quando deciderete sarete pronti.</p>',

      link('/servizi/cessioni-e-acquisizioni/', 'Scopri il servizio Cessioni e acquisizioni'),
    ].join(''),
    metaDescription:
      'Il momento giusto per cedere non si riconosce dallo stato d’animo, ma dalla curva su cui si trova l’azienda: i segnali, i tempi e cosa si prepara prima.',
    date: new Date('2026-06-18'),
    author: 'Redazione',
    featuredImage: { url: '/images/sezioni/blog-vendere-azienda.jpg', alt: 'Tavolo di trattativa in uno studio' },
  },

  {
    slug: 'passaggio-generazionale-tre-errori-da-evitare',
    title: 'Passaggio generazionale: tre errori da evitare',
    excerpt:
      'Rimandare, non scrivere le regole, confondere eredità e guida: i tre errori che vediamo più spesso nelle imprese familiari — e come si prevengono.',
    contentHtml: [
      '<p>Il passaggio generazionale è l’unica scadenza aziendale che tutti vedono arrivare e nessuno fissa in agenda. Non per distrazione: perché parlarne costa una conversazione difficile, e rimandarla costa — in apparenza — niente.</p>',
      '<p>Poi arriva comunque. E gli errori che incontriamo più spesso sono sempre gli stessi tre.</p>',

      '<h2>Primo: rimandare finché la scelta non è più una scelta</h2>',
      '<p>Un passaggio pianificato si distribuisce su anni: deleghe progressive, strumenti fiscali usati nei tempi giusti, successori che imparano mentre il fondatore c’è ancora e può ancora insegnare. Un passaggio improvviso si concentra in poche settimane, sotto pressione emotiva e con vincoli che nessuno ha scelto.</p>',
      '<p>La differenza non è di stile: è di costo. Un trasferimento graduale ha un prezzo; uno subìto ne ha uno molto maggiore, e si paga in valore d’azienda.</p>',

      '<h2>Secondo: non mettere per iscritto le regole</h2>',
      '<p>Finché la famiglia va d’accordo, le regole sembrano superflue. Servono esattamente quando l’accordo finisce — ed è allora che non si riesce più a scriverle, perché ogni clausola viene letta come una presa di posizione contro qualcuno.</p>',
      '<p>Chi decide, come si decide, cosa succede se due rami non sono d’accordo, a quali condizioni un socio può uscire, chi può entrare e chi no. Sono domande che si risolvono da freddi, con statuto, patti di famiglia e regole di governance. Prima che servano.</p>',

      '<h2>Terzo: confondere l’eredità con la guida</h2>',
      '<p>Le quote si dividono. La guida no. Il primo riflesso — dare a ciascuno la stessa cosa — produce assetti in cui nessuno ha davvero la responsabilità e ogni decisione richiede l’unanimità. Sono le aziende che, viste da fuori, sembrano ferme senza un motivo.</p>',
      '<p>Equità e governo sono due problemi diversi e vanno risolti con strumenti diversi: si può essere equi nella proprietà e netti nel comando, purché lo si scriva. E purché sia chiaro che ereditare quote non significa saper guidare: chi prende la guida va preparato, non solo nominato.</p>',

      '<p>Il denominatore comune dei tre errori è lo stesso: si affronta il passaggio quando è già urgente, e l’urgenza toglie opzioni. La finestra utile si apre molto prima — idealmente cinque anni prima di quando pensate serva.</p>',

      link('/servizi/passaggio-generazionale/', 'Scopri il servizio Passaggio generazionale'),
    ].join(''),
    metaDescription:
      'Rimandare, non scrivere le regole, confondere eredità e guida: i tre errori più frequenti nelle imprese familiari e come si prevengono per tempo.',
    date: new Date('2026-05-30'),
    author: 'Redazione',
    featuredImage: { url: '/images/sezioni/blog-passaggio.jpg', alt: 'Passaggio di competenze in azienda' },
  },

  {
    slug: 'capitali-dal-golfo-cosa-cercano-gli-investitori',
    title: 'Capitali dal Golfo: cosa cercano gli investitori',
    excerpt:
      'Family office e fondi sovrani guardano al Made in Italy con interesse crescente. Ma le regole d’ingaggio sono diverse: ecco cosa preparare prima di sedersi al tavolo.',
    contentHtml: [
      '<p>L’attenzione dei capitali del Golfo per il manifatturiero e il lusso italiani non è una novità. È cambiato il modo in cui si muovono: meno operazioni-trofeo, più partecipazioni industriali con un orizzonte lungo e la volontà di restare.</p>',
      '<p>Per un imprenditore italiano è una buona notizia, a una condizione: che il tavolo si affronti con le regole d’ingaggio giuste, che non sono quelle a cui abitua il mercato domestico.</p>',

      '<h2>Cosa guardano davvero</h2>',
      '<ul>',
      '<li><strong>Il marchio, ma solo se è difendibile.</strong> Registrazioni in ordine, titolarità chiara, tutela nei mercati di destinazione. Un marchio forte e mal protetto vale meno di un marchio medio e blindato.</li>',
      '<li><strong>La filiera, non solo il prodotto.</strong> Vogliono capire da chi dipendete, quanto è sostituibile ogni fornitore critico e quanta parte della qualità è documentata invece che affidata alle persone.</li>',
      '<li><strong>Un management che resta.</strong> L’investitore compra continuità. Se tutto passa dal fondatore, il rischio percepito sale e il prezzo scende.</li>',
      '<li><strong>Numeri che reggono una verifica lunga.</strong> Le due diligence sono più lente e più formali: quello che non è documentato, semplicemente, non esiste.</li>',
      '<li><strong>Una governance leggibile.</strong> Chi delibera, con quali maggioranze, con quali diritti di uscita. L’ambiguità societaria è tra i primi motivi per cui un tavolo si ferma.</li>',
      '</ul>',

      '<h2>Come cambia il ritmo</h2>',
      '<p>I tempi sono più lunghi e la relazione conta più che altrove — ma i documenti devono esserci comunque. La fase iniziale è di conoscenza reciproca e può sembrare improduttiva a chi è abituato a partire dal prezzo. Non lo è: è lì che si decide se un prezzo ci sarà.</p>',
      '<p>L’errore più frequente è presentarsi con un dossier costruito per il mercato italiano: sintetico, informale, molto appoggiato al rapporto personale. Dall’altra parte viene letto come impreparazione, non come confidenza.</p>',

      '<p>Prepararsi a questo tipo di interlocutore non richiede di cambiare l’azienda. Richiede di renderla dimostrabile: la stessa impresa, raccontata con documenti che reggono le domande che verranno fatte.</p>',

      link('/servizi/cessioni-e-acquisizioni/', 'Scopri il servizio Cessioni e acquisizioni'),
    ].join(''),
    metaDescription:
      'Family office e fondi sovrani guardano al Made in Italy: cosa valutano davvero, come cambiano tempi e due diligence, cosa preparare prima del tavolo.',
    date: new Date('2026-05-12'),
    author: 'Redazione',
    featuredImage: { url: '/images/sezioni/blog-capitali-golfo.jpg', alt: 'Studio direzionale affacciato sullo skyline' },
  },
];
