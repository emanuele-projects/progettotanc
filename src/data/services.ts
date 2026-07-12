export interface Service {
  slug: string;
  num: string;
  title: string;
  /** Titolo senza <br>, per meta e liste */
  plainTitle: string;
  excerpt: string;
  /** Sottotitolo per la pagina di dettaglio */
  lead: string;
  /** Paragrafi stub della pagina di dettaglio — TODO-CONTENUTO: da sviluppare uno a uno */
  body: string[];
  /** Scena illustrata di brand (variant di BrandArt) */
  art: 'deal' | 'growth' | 'succession' | 'vault' | 'global' | 'quality';
}

/**
 * I servizi principali, riordinati per centralità strategica:
 * l'M&A apre, seguito dalla finanza straordinaria e dai servizi
 * di continuità e tutela. Il Deep Consulting è l'approccio comune.
 */
export const services: Service[] = [
  {
    slug: 'ma-e-ricerca-di-capitali',
    art: 'deal',
    num: '01',
    title: 'M&A e ricerca di capitali',
    plainTitle: 'M&A e ricerca di capitali',
    excerpt:
      'Apriamo le porte ai capitali giusti: nuovi soci, fondi, family office. Vi accompagniamo dalla scelta del partner alla firma, con il valore dell’azienda sempre al centro.',
    lead: 'Cessioni, acquisizioni, aperture di capitale: operazioni che si fanno una volta sola e vanno fatte bene.',
    body: [
      'Analisi strategica, valutazione, ricerca del partner industriale o finanziario: gestiamo l’intero processo, dalla preparazione dell’azienda alla firma, tutelando riservatezza e valore.',
      'La nostra rete di fondi, family office e investitori tra Europa e Golfo ci permette di aprire tavoli che altrimenti resterebbero chiusi.',
    ],
  },
  {
    slug: 'finanza-e-ristrutturazione-del-debito',
    art: 'growth',
    num: '02',
    title: 'Finanza & ristrutturazione del debito',
    plainTitle: 'Finanza e ristrutturazione del debito',
    excerpt:
      'Rimettiamo in equilibrio i conti: analisi di margini e flussi, riequilibrio del debito, trattativa con le banche. Tornano ossigeno alla gestione e margine per crescere.',
    lead: 'Riportare i conti in equilibrio è il primo atto di ogni strategia: da lì tornano ossigeno, credito e libertà di scelta.',
    body: [
      'Partiamo dai numeri veri: margini, flussi di cassa, struttura del debito. Una diagnosi onesta che distingue i problemi di redditività da quelli di liquidità e individua le leve su cui agire subito.',
      'Costruiamo il piano di riequilibrio e lo negoziamo con le banche e i creditori: moratorie, riscadenzamenti, nuova finanza. Con una regia unica e la proprietà sempre al tavolo.',
    ],
  },
  {
    slug: 'passaggio-generazionale',
    art: 'succession',
    num: '03',
    title: 'Passaggio generazionale',
    plainTitle: 'Passaggio generazionale',
    excerpt:
      'Trasferiamo la guida custodendo il valore. Accompagniamo fondatore e successori e teniamo saldi competenze, patrimonio e i rapporti che fanno l’azienda.',
    lead: 'La continuità non si improvvisa: si progetta con patti chiari, governance solida e persone preparate.',
    body: [
      'Affianchiamo fondatore e successori nella costruzione del passaggio: patti di famiglia, architettura societaria, regole di governance che tengono insieme impresa e famiglia.',
      'Il trasferimento riguarda anche le competenze: prepariamo la nuova guida con un percorso di mentoria dedicato, perché il valore resti in azienda.',
    ],
  },
  {
    slug: 'protezione-del-patrimonio',
    art: 'vault',
    num: '04',
    title: 'Protezione del patrimonio',
    plainTitle: 'Protezione del patrimonio',
    excerpt:
      'Mettiamo al sicuro ciò che avete costruito: un confine chiaro tra rischio d’impresa e beni personali, governance della ricchezza, valore che attraversa le generazioni.',
    lead: 'Separare il rischio d’impresa dal patrimonio personale è un dovere verso la famiglia e verso l’azienda stessa.',
    body: [
      'Progettiamo l’architettura di protezione: segregazione dei beni, strumenti fiduciari, governance patrimoniale. Ogni struttura è legittima, trasparente e costruita su misura.',
      'Il patrimonio protetto è patrimonio che dura: regole chiare per l’oggi e per il passaggio alle generazioni successive.',
    ],
  },
  {
    slug: 'internazionalizzazione',
    art: 'global',
    num: '05',
    title: 'Internazionalizzazione',
    plainTitle: 'Internazionalizzazione',
    excerpt:
      'Portiamo l’impresa dove cresce il mercato: nuove sedi, nuovi paesi, una rete locale già attiva nei principali hub d’Europa e del Golfo.',
    lead: 'Crescere fuori dai confini richiede presidio locale, partner giusti e una struttura fiscale e societaria pensata prima.',
    body: [
      'Valutiamo mercati e modalità di ingresso, costituiamo le strutture locali, selezioniamo partner e management. La nostra presenza diretta negli hub che contano accorcia tempi e rischi.',
      'Dall’export strutturato all’insediamento produttivo: ogni progetto ha un piano, un budget e un responsabile.',
    ],
  },
  {
    slug: 'certificazioni-iso-e-made-in-italy',
    art: 'quality',
    num: '06',
    title: 'Certificazioni ISO & Made in Italy',
    plainTitle: 'Certificazioni ISO e Made in Italy',
    excerpt:
      'Trasformiamo la qualità in vantaggio commerciale. Vi guidiamo alle certificazioni internazionali con enti accreditati, per vincere gare, filiere e nuovi mercati.',
    lead: 'La certificazione non è un timbro: è una chiave d’accesso a gare, filiere e clienti che altrimenti non aprono la porta.',
    body: [
      'Accompagniamo l’azienda alle certificazioni ISO e alle attestazioni di filiera con enti accreditati, integrando i requisiti nei processi reali — senza burocrazia inutile.',
      'Valorizziamo il Made in Italy come leva commerciale: tracciabilità, qualità documentata, reputazione spendibile sui mercati internazionali.',
    ],
  },
];
