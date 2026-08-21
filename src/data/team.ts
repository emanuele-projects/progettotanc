/**
 * Le persone dello studio: un elenco unico, ordinato per ruolo.
 *
 * `bio` è facoltativa e arriva dalle note fornite dal cliente. Dove c’è, la
 * scheda mostra il pulsante «Altro» che apre il profilo esteso; dove manca,
 * la scheda resta a nome e ruolo. I testi sono riportati in terza persona
 * per uniformità fra le schede, comprese le note nate in prima persona.
 */

export interface Member {
  /** Iniziali per il monogramma di ripiego */
  mono: string;
  name: string;
  role: string;
  /** Profilo esteso, un elemento per capoverso. Le citazioni chiudono il testo. */
  bio?: string[];
  /**
   * Ritratto reale, quando disponibile (es. '/images/team/fulvio-rossi.jpg').
   * Se assente si usa il placeholder BrandArt.
   */
  photo?: string;
  /** Nota sotto la scheda, per i ritratti non ancora definitivi */
  photoNote?: string;
}

export const team: Member[] = [
  {
    mono: 'FR',
    name: 'Fulvio Tancredi Rossi',
    role: 'Presidente e Co-fondatore',
    photo: '/images/team/fulvio-rossi.jpg',
    bio: [
      'La sua carriera non ha seguito un percorso tradizionale: ha scelto di capire come funzionano davvero le dinamiche delle persone, dei mercati e dei processi, e poi di migliorarle. Trentotto anni dopo, il lavoro è rimasto lo stesso.',
      'Marketing, finanza aziendale, ottimizzazione: per lui non sono tre mestieri ma un unico modo di pensare, applicabile a ogni situazione. Ha lavorato per Castadiva, Uvet (American Express), Juventus, Barilla, Piaggio e Aprilia, Iveco, Synapsy e YEG: aziende che non affidano mandati a chi promette risultati rapidi e sicuri, ma a chi ha visione, determinazione e il coraggio di portare il progetto a termine anche a costo della popolarità interna.',
      'Fulviorossi PLUS nasce dalla Fulviorossi del 1989, come iniziativa avviata con altri quattro co-fondatori di altissimo profilo.',
      'Laurea magistrale in Lettere a indirizzo filosofico, 110 e lode con pubblicazione della tesi, e un Master in Marketing alla London School of Economics and Political Science: due approcci distinti ma complementari, che portano allo stesso risultato. Capire a fondo, poi agire senza esitare.',
      'Quattro figli, e una regola sola: in azienda come in famiglia, obiettivi chiari, zero scuse, presenza vera.',
      'Nato in Egitto, cresciuto prima a Beirut e poi a Londra. Parla italiano, francese, inglese, arabo e spagnolo, e sta studiando cinese. Non è un dettaglio biografico ma una competenza professionale: gli permette di stare con persone e culture diverse con la stessa naturalezza con cui cambia lingua a metà frase.',
      '«Il resto è rumore. Io lavoro.»',
    ],
  },
  {
    mono: 'CR',
    name: 'Carolina Rossi',
    role: 'Amministratore Delegato e Vice Presidente',
    photo: '/images/team/carolina-rossi.jpg',
    bio: [
      'Madre, moglie, imprenditrice, paladina di donne e bambini. Console Onorario di Italia & Friends, riferimento familiare di un paio di cani e di quattro gatti arrivati chissà da dove, icona della lunga treccia che ha portato per quasi quarant’anni, demolitrice di barriere di genere, fan delle maglie in lana cruda, appassionata di golf, premurosa assistente alla Caritas. Nel poco tempo libero cura le sue piante e i suoi fiori, legge gialli, ama il vino bianco e la cucina, nel senso di assaporarla.',
      'La sua famiglia non era agiata, e questo le ha insegnato l’importanza del lavoro duro e del risparmio: a volte sono le uniche due cose che una persona può permettersi.',
      'Nata a Cracovia nel 1972, seconda di due sorelle e un fratello, da padre polacco e madre danese, vive fra Polonia e Danimarca prima di trasferirsi in Italia per studio. Roma la vede studentessa diligente e timorata: alterna l’università al lavoro serale in birrerie e ristoranti e divide un appartamento con altre tre amiche polacche, che sono ancora oggi le sue quattro migliori amiche. Nel 1991 incontra colui che sarebbe diventato, ed è rimasto, l’uomo della sua vita e il padre dei suoi figli.',
      'Il 1992 è scandito da una serie di impegni improrogabili: si laurea in economia e commercio, prende la patente, arriva a Torino con la sua Panda verde, si sposa. Poco più di un anno dopo nasce la prima figlia, pensando che un figlio sia un dono; ma di doni ne arrivano altri, mediamente a cadenza biennale, nel 1994 e nel 1996. Per il quarto bisognerà aspettare il 2011, quando entra in famiglia con una dichiarazione di affido, a tredici anni.',
      'Dopo essersi occupata per una quindicina d’anni della segreteria e della contabilità dell’azienda di famiglia, si trasferisce a Milano e assume un ruolo di rilievo in una multinazionale fino al 2024. Nel 2019 supera un tumore grazie a una lucidità incredibile e a una concentrazione estrema: ne esce vincitrice, ma l’episodio la segna e le pone nuovi obiettivi, promuovere la prevenzione e la lotta ai tumori femminili e scriverne a tutte le donne.',
      'Parla correntemente italiano, inglese, francese, polacco e russo.',
      'Questa è stata, è, e sarà Carolina Rossi. «Tutto il resto è rumore, io lavoro.»',
    ],
  },
  {
    mono: 'PD',
    name: 'Pablo Docimo',
    role: 'Partner Executive',
    photo: '/images/team/pablo-docimo.jpg',
    bio: [
      'Ex C-Level in aziende del Gruppo TIM, dove come Direttore Generale di Trainet e COO di TILS è stato fra i pionieri dell’economia digitale in Europa e America Latina.',
      'Già Consigliere del Presidente del Consiglio su innovazione e formazione, Vice President del Consorzio per il Distretto Industriale per Telco, Media e Information Technology dell’Unione Industriali di Roma e Board Member dell’HR & Learning Governing Board in Confindustria.',
      'Nel corporate IT e ICT dal 1989, nelle funzioni marketing, sales e HR: ha gestito P&L, guidato trasformazioni, chiuso operazioni straordinarie di fusione e acquisizione e tenuto relazioni istituzionali a livello apicale.',
    ],
  },
  {
    mono: 'LB',
    name: 'Luca Basso',
    role: 'Partner Executive',
    photo: '/images/team/luca-basso.jpg',
    photoNote: 'Ritratto provvisorio',
  },
  {
    mono: 'GC',
    name: 'Giuseppe Catizone',
    role: 'Partner & Politics Relationships',
    photo: '/images/team/giuseppe-catizone.jpg',
    bio: [
      'Ha maturato un’esperienza pluriennale nelle relazioni istituzionali, nello sviluppo internazionale e nella consulenza strategica, costruita in oltre un decennio di interazione fra istituzioni, imprese e mercati internazionali. Laureato e specializzato in relazioni internazionali, ha sviluppato un percorso che unisce una profonda conoscenza dei processi istituzionali e decisionali a una solida comprensione delle dinamiche economiche, dei modelli di innovazione e dei sistemi di relazione fra settore pubblico e privato.',
      'La sua esperienza professionale include responsabilità di vertice all’interno di istituzioni di rilievo, fra cui un decennio alla guida di una delle principali città dell’area metropolitana di Torino, e attività di consulenza per imprese e organizzazioni impegnate in processi di crescita, posizionamento e sviluppo internazionale.',
      'Negli anni ha costruito un’ampia rete di relazioni con istituzioni, leader di business, decision maker e stakeholder in diversi Paesi. Ha affiancato aziende e organizzazioni nella definizione delle strategie di posizionamento istituzionale, nello sviluppo di partnership e nella creazione di opportunità su nuovi mercati, con una conoscenza approfondita dei mercati europei e dell’Europa centro-orientale, acquisita attraverso relazioni e attività sviluppate direttamente nei diversi contesti.',
      'Interpretare scenari istituzionali, economici e geopolitici, costruire relazioni ad alto livello, connettere interessi, competenze e opportunità: è questo il tratto distintivo della sua attività. Si muove con naturalezza in contesti multiculturali e internazionali. Parla italiano, inglese, francese, spagnolo e portoghese, con una conoscenza di base del russo.',
    ],
  },
  {
    mono: 'MC',
    name: 'Michelangelo Chasseur',
    role: 'Partner & Digital Transformation',
    photo: '/images/team/michelangelo-chasseur.jpg',
  },
  {
    mono: 'GH',
    name: 'Gerard Hanoun',
    role: 'Partner UAE',
    photo: '/images/team/gerard-hanoun.jpg',
  },
  {
    mono: 'SG',
    name: 'Simona Giorgetti',
    role: 'Segreteria di presidenza',
    photo: '/images/team/simona-giorgetti.jpg',
  },
];
