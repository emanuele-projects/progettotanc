/**
 * Copy definitivi delle pagine servizio — fonte: «FRP — Copy definitivi per la
 * messa in pagina» (v2). La struttura ricalca 1:1 le etichette del documento:
 * occhiello, H1, sottotitolo hero, testo di apertura, «Il punto di partenza»,
 * «Come lavoriamo», eventuali sezioni aggiuntive, «Cosa resta in mano vostra»,
 * «Quando ha senso parlarne», meta description.
 */

/** Voce di elenco; `lead` è la parte in grassetto a inizio riga */
export interface ListItem {
  lead?: string;
  text: string;
}

/** Blocco di corpo riutilizzabile: paragrafi, elenco, chiusura, callout */
export interface Block {
  paras?: string[];
  /** Sottotitolo (H3) sopra l'elenco */
  listTitle?: string;
  list?: ListItem[];
  /** Paragrafi dopo l'elenco */
  outro?: string[];
  /** Frase in evidenza, in corsivo, a chiusura del blocco */
  callout?: string;
}

/** Fase di «Come lavoriamo» */
export interface Step {
  title: string;
  text: string;
  /** Approfondimento in evidenza dentro la fase */
  insert?: Block;
}

/** Sezione H2 aggiuntiva nel corpo pagina */
export interface Section {
  eyebrow?: string;
  title: string;
  block: Block;
}

export interface Faq {
  eyebrow?: string;
  title: string;
  items: { q: string; a: string }[];
}

export interface Service {
  slug: string;
  num: string;
  /** Titolo di card e H1; può contenere <br> */
  title: string;
  /** Titolo senza <br>, per meta e liste */
  plainTitle: string;
  /** Abstract della card in home e nell'indice servizi */
  excerpt: string;
  /** Sottotitolo del blocco di apertura */
  lead: string;
  /** Meta description — solo SEO, non compare in pagina */
  metaDescription: string;
  /** Testo di apertura */
  intro: string[];
  /** «Il punto di partenza» */
  startingPoint: string;
  /** «Come lavoriamo» */
  steps: Step[];
  /** Sezioni H2 aggiuntive, dopo le fasi e prima di «Cosa resta in mano vostra» */
  sections?: Section[];
  faq?: Faq;
  /** Frase dello stacco a lettering, a metà pagina */
  claim: string;
  /** «Cosa resta in mano vostra» */
  outcomes: string[];
  /** «Quando ha senso parlarne» */
  whenToTalk: string;
  /** Sezione in chiusura di pagina, dopo «Quando ha senso parlarne» */
  closing?: Section;
  /** Scena illustrata di brand (variant di BrandArt) */
  art: 'deal' | 'growth' | 'succession' | 'vault' | 'global' | 'quality' | 'boardroom';
  /**
   * Fotografia reale, quando disponibile: prevale sulla scena di brand.
   * Finché è assente le pagine servizio usano l'illustrazione di `art`.
   */
  photo?: string;
  /**
   * Punto della foto da tenere sempre in inquadratura. Serve perché lo
   * stesso scatto viene ritagliato in tre proporzioni molto diverse —
   * hero panoramico, card 16/10 e colonna 4/5 — e senza questo riferimento
   * il soggetto finisce fuori dal taglio.
   */
  focus?: string;
}

/**
 * I servizi principali, riordinati per centralità strategica:
 * la compravendita d'azienda apre, seguita dalla finanza straordinaria e dai servizi
 * di continuità e tutela. Il Deep Consulting è l'approccio comune.
 */
export const services: Service[] = [
  {
    slug: 'cessioni-e-acquisizioni',
    photo: '/images/sezioni/cessioni-e-acquisizioni.jpg',
    focus: '60% 30%',
    art: 'deal',
    num: '01',
    title: 'Cessioni, acquisizioni e ricerca di capitali',
    plainTitle: 'Cessioni, acquisizioni e ricerca di capitali',
    excerpt:
      'Apriamo le porte ai capitali giusti: nuovi soci, fondi, family office. Vi accompagniamo dalla scelta del partner alla firma, con il valore dell’azienda sempre al centro.',
    lead: 'Cessioni, acquisizioni, aperture di capitale: operazioni che si fanno una volta sola e vanno fatte bene.',
    metaDescription:
      'Cessioni, acquisizioni e apertura del capitale: valutazione, preparazione dell’azienda, ricerca del partner e negoziazione fino al closing.',
    intro: [
      'Facciamo da tramite per comprare e vendere aziende, e troviamo acquirenti nelle operazioni di ristrutturazione. Vendere l’azienda, comprarne una, far entrare un socio: sono decisioni che cambiano la vita di un imprenditore e il perimetro di una famiglia. Si preparano per mesi, si giocano in poche settimane, e il margine per rimediare a un errore è quasi nullo.',
      'Noi entriamo prima che il tavolo si apra. Perché il valore di un’impresa non si negozia: si costruisce nei mesi che precedono la trattativa.',
    ],
    startingPoint:
      'La maggior parte delle operazioni non fallisce sul prezzo. Fallisce perché l’azienda arriva impreparata: numeri che non reggono la due diligence, dipendenza dal fondatore, contratti mai formalizzati, un perimetro societario che nessuno riesce a leggere in fretta. Ogni zona d’ombra, al tavolo, diventa uno sconto.',
    steps: [
      {
        title: 'Diagnosi e valutazione',
        text: 'Analizziamo fatturati, margini, flussi e struttura societaria, e definiamo un intervallo di valore difendibile con i numeri alla mano. Vi diciamo quanto vale l’azienda oggi e cosa la separa da quanto potrebbe valere. Se il momento non è quello giusto, ve lo diciamo prima di partire.',
      },
      {
        title: 'Preparazione',
        text: 'Sistemiamo ciò che va sistemato e costruiamo i documenti dell’operazione. Prepariamo l’azienda alle domande che le verranno fatte, prima che gliele facciano.',
        insert: {
          paras: [
            'Chi cerca capitali scopre presto una cosa poco intuitiva: il primo giudizio non viene dato sull’azienda, ma sui documenti che la raccontano. Un investitore legge decine di dossier al mese e decide in pochi minuti quali approfondire. Un piano confuso, proiezioni che non stanno in piedi, un racconto che non spiega perché proprio voi: bastano a chiudere la porta prima ancora del primo incontro.',
            'Per questo prepariamo i materiali insieme a voi, e li prepariamo per resistere alle domande difficili:',
          ],
          list: [
            {
              lead: 'Il business plan',
              text: 'costruito perché regga la verifica: ipotesi dichiarate, numeri riconciliati con i bilanci, scenari alternativi già previsti.',
            },
            {
              lead: 'Il modello economico-finanziario',
              text: 'con proiezioni che si possono discutere una a una — perché in due diligence verranno discusse una a una.',
            },
            {
              lead: 'Il documento di presentazione',
              text: 'che spiega in poche pagine cosa fate, perché funziona e perché adesso. Sintesi, non compressione.',
            },
            {
              lead: 'La strategia commerciale',
              text: 'verificata sul mercato prima che sia un investitore a verificarla per voi.',
            },
            {
              lead: 'La data room',
              text: 'ordinata prima che qualcuno chieda di entrarci.',
            },
          ],
          outro: [
            'Non scriviamo documenti al posto vostro: li costruiamo con voi, perché al tavolo dovrete difenderli voi. Il nostro compito è che non ci siano domande a cui non avete già una risposta.',
          ],
        },
      },
      {
        title: 'Apertura dei tavoli',
        text: 'Selezioniamo una rosa ristretta di controparti — industriali, fondi, family office, investitori tra Europa e Golfo — e le contattiamo in riservatezza, sotto NDA. Non mandiamo l’azienda “sul mercato”: portiamo pochi interlocutori credibili a sedersi. La nostra rete apre porte che dall’interno resterebbero chiuse.',
      },
      {
        title: 'Negoziazione e closing',
        text: 'Gestiamo manifestazioni d’interesse, lettera d’intenti, due diligence e contrattualistica fino alla firma, coordinando legali e fiscalisti. Presidiamo le clausole che contano davvero: earn-out, garanzie, patti parasociali, ruolo del fondatore dopo il closing.',
      },
    ],
    claim:
      'Il valore di un’impresa non si negozia: si costruisce nei mesi che precedono la trattativa.',
    outcomes: [
      'Una valutazione documentata, non un’opinione',
      'Una rosa di controparti reali, filtrate e riservate',
      'Un processo competitivo che protegge il prezzo',
      'Un contratto che regge anche dopo la firma',
    ],
    whenToTalk:
      'Quando pensate alla cessione ma non sapete se è il momento. Quando un compratore vi ha già cercati. Quando la crescita richiede capitali che la banca non dà. Quando volete acquisire e non sapete a chi bussare.',
    closing: {
      title: 'Anche prima del primo round',
      block: {
        paras: [
          'Il nostro mestiere nasce con le imprese mature, ma la ricerca di capitali ha le stesse regole a ogni età. Cambia la posta, non il metodo: chi valuta guarda i numeri, il mercato e chi c’è dietro — e decide in fretta.',
          'Per questo affianchiamo anche imprese giovani nella preparazione al primo investitore. Non con un percorso diverso, ma con lo stesso: capire quanto vale davvero l’idea, costruire i documenti che reggono la verifica, scegliere gli interlocutori giusti e sedersi al tavolo preparati. Con una differenza che pesa: un’impresa giovane ha meno storia da mostrare, e quindi meno margine di errore su ciò che mostra.',
        ],
        callout:
          'Che siate al primo round o alla cessione di un’azienda costruita in trent’anni, davanti a un investitore vale la stessa cosa: arrivarci preparati.',
      },
    },
  },
  {
    slug: 'finanza-e-ristrutturazione-del-debito',
    photo: '/images/sezioni/finanza-e-ristrutturazione-del-debito.jpg',
    focus: '50% 42%',
    art: 'growth',
    num: '02',
    title: 'Finanza & ristrutturazione del debito',
    plainTitle: 'Finanza e ristrutturazione del debito',
    excerpt:
      'Rimettiamo in equilibrio i conti: analisi di margini e flussi, riequilibrio del debito, trattativa con le banche. Tornano ossigeno alla gestione e margine per crescere.',
    lead: 'Rimettere in equilibrio i conti prima che siano i conti a decidere per voi.',
    metaDescription:
      'Margini e flussi, piano economico-finanziario, riscadenzamento del debito e strumenti del Codice della crisi: dalla diagnosi precoce al piano attestato.',
    intro: [
      'Un’azienda può avere ordini, clienti e un buon prodotto, e nonostante questo passare le giornate a inseguire scadenze. Quando la tensione finanziaria entra in azienda smette di essere un problema di numeri e diventa un problema di lucidità: si decide di fretta, si decide peggio.',
      'Il nostro lavoro è restituirvi ossigeno e tempo. In quest’ordine.',
    ],
    startingPoint:
      'Quasi sempre il debito non è la malattia: è il sintomo. Marginalità erosa, capitale circolante che assorbe cassa, investimenti finanziati con la scadenza sbagliata, credito bancario costruito nel tempo senza una regìa. Chi tratta con le banche senza aver prima capito da dove nasce il buco ottiene rinvii. Non soluzioni.',
    steps: [
      {
        title: 'La fotografia onesta',
        text: 'Ricostruiamo margini reali per linea di business, flussi di cassa, posizione finanziaria netta ed esposizione verso il sistema bancario. È la fase in cui diciamo cose che non sempre fanno piacere sentirsi dire — ed è esattamente per questo che serve qualcuno di esterno.',
      },
      {
        title: 'Il piano',
        text: 'Costruiamo un piano economico-finanziario credibile: previsione di cassa a breve per governare le settimane critiche, business plan pluriennale per governare la direzione. Un piano serve a due cose: guidare voi e convincere chi dovrà crederci.',
      },
      {
        title: 'Il tavolo con gli istituti',
        text: 'Sediamo noi al tavolo, con voi. Riscadenzamento delle linee, consolidamento, nuova finanza, garanzie pubbliche. Parliamo la lingua degli istituti e portiamo numeri che reggono la loro istruttoria. Sullo stesso tavolo valutiamo finanza agevolata e fondi europei, quando ci sono e quando servono davvero.',
      },
      {
        title: 'Il presidio',
        text: 'Un accordo firmato non è un problema risolto. Restiamo a monitorare l’andamento rispetto al piano, con un reporting essenziale che vi dice ogni mese se siete in rotta.',
      },
    ],
    sections: [
      {
        eyebrow: 'Gestire la crisi finché gli strumenti servono ancora a qualcosa.',
        title: 'Quando la tensione diventa crisi conclamata',
        block: {
          paras: [
            'C’è un punto in cui il problema smette di essere finanziario e diventa giuridico: quando i debiti verso il fisco e i contributi si accumulano, quando un creditore minaccia un’azione, quando gli indici di allerta previsti dalla legge scattano. Da lì in avanti il tempo non è più una variabile: è la variabile.',
            'Il Codice della crisi ha cambiato le regole del gioco. Ha introdotto strumenti che permettono di risanare l’impresa mantenendone il controllo, ma li ha legati a una condizione: attivarli finché l’azienda è ancora recuperabile. Chi si muove per tempo ha un ventaglio di possibilità. Chi aspetta, quasi sempre, ne ha una sola.',
          ],
          listTitle: 'Cosa mettiamo a disposizione',
          list: [
            {
              lead: 'Diagnosi precoce.',
              text: 'Verifichiamo se e quanto l’impresa è esposta agli indicatori di squilibrio, e vi diciamo con franchezza in quale stadio siete. È l’analisi che permette di scegliere lo strumento giusto invece di subire quello che resta.',
            },
            {
              lead: 'Composizione negoziata della crisi.',
              text: 'Vi accompagniamo nel percorso riservato con l’esperto indipendente nominato dalla Camera di commercio: prepariamo la documentazione, costruiamo il piano di risanamento e sediamo con voi al tavolo con creditori e banche. L’impresa resta in mano vostra e continua a operare.',
            },
            {
              lead: 'Piano attestato di risanamento.',
              text: 'Costruiamo il piano industriale e finanziario e coordiniamo il lavoro dell’attestatore indipendente, che dovrà certificarne la veridicità dei dati e la fattibilità. Un piano attestato mette al riparo gli atti che ne danno esecuzione: per questo va scritto perché regga, non perché convinca.',
            },
            {
              lead: 'Riequilibrio degli obblighi tributari.',
              text: 'Affrontiamo il debito fiscale e contributivo con gli strumenti che la legge mette a disposizione, dalla rateizzazione alla transazione fiscale all’interno delle procedure. L’obiettivo è riportare l’esposizione dentro una sostenibilità reale, non spostarla di qualche mese.',
            },
            {
              lead: 'Regia dei professionisti.',
              text: 'Un percorso di crisi coinvolge legali, attestatori, commercialisti, consulenti del lavoro. Li coordiniamo noi, così voi avete un solo interlocutore e potete tornare a occuparvi dell’azienda.',
            },
          ],
          outro: [
            'Il nostro ruolo è quello dell’advisor dell’imprenditore: costruiamo il piano, prepariamo i numeri e conduciamo la trattativa. L’attestazione e le nomine indipendenti spettano per legge ad altri soggetti — ed è bene che sia così, perché è proprio quella terzietà a dare valore al piano davanti ai creditori.',
          ],
        },
      },
    ],
    claim:
      'Il debito quasi mai è la malattia: è il sintomo. Si cura risalendo alla causa.',
    outcomes: [
      'Chiarezza su dove si genera e dove si brucia margine',
      'Un piano finanziario sostenibile, non una speranza',
      'Un debito riscadenzato sulla capacità reale dell’impresa',
      'Un rapporto con le banche basato su dati, non su rincorse',
      'Gli strumenti di legge attivati finché servono a qualcosa',
    ],
    whenToTalk:
      'Quando la cassa detta l’agenda. Quando le banche chiedono un piano e non sapete come scriverlo. Quando i ricavi crescono ma i margini no. Quando avete saltato una scadenza fiscale o contributiva. Quando vi hanno parlato di composizione negoziata e non sapete cosa comporti — e comunque prima di arrivare al punto in cui l’unica strada è la liquidazione.',
  },
  {
    slug: 'passaggio-generazionale',
    photo: '/images/sezioni/passaggio-generazionale.jpg',
    focus: '46% 34%',
    art: 'succession',
    num: '03',
    title: 'Passaggio generazionale',
    plainTitle: 'Passaggio generazionale',
    excerpt:
      'Trasferiamo la guida custodendo il valore. Accompagniamo fondatore e successori e teniamo saldi competenze, patrimonio e i rapporti che fanno l’azienda.',
    lead: 'Trasferire la guida senza disperdere ciò che l’ha resa possibile.',
    metaDescription:
      'Governance familiare, assetto societario, patti di famiglia e successori preparati: trasferiamo la guida custodendo competenze, patrimonio e relazioni.',
    intro: [
      'Nelle imprese familiari il passaggio generazionale è la scadenza che tutti vedono arrivare e nessuno fissa in agenda. Si rimanda perché è delicato, perché tocca gli affetti prima dei bilanci, perché parlarne sembra ammettere qualcosa.',
      'Poi arriva comunque. E se arriva senza regole scritte, decidono le circostanze.',
    ],
    startingPoint:
      'Il valore di un’azienda familiare vive in tre luoghi: le quote, le competenze e le relazioni. Un passaggio riuscito li trasferisce tutti e tre. Un passaggio mal gestito trasferisce solo le quote, e i primi due si perdono per strada: fornitori storici, banche, clienti, persone chiave che avevano un rapporto con il fondatore, non con la società.',
    steps: [
      {
        title: 'Ascoltare separatamente',
        text: 'Parliamo con il fondatore, con i successori e con chi in azienda ha responsabilità, singolarmente e in riservatezza. Le aspettative non dette sono la prima causa di rottura. Farle emergere prima costa una conversazione difficile; farle emergere dopo costa l’azienda.',
      },
      {
        title: 'Separare famiglia e impresa',
        text: 'Progettiamo l’assetto che tiene distinti i due piani: struttura societaria e holding, statuti, patti di famiglia, regole di governance, criteri di ingresso e di uscita dei soci familiari. Chi decide, come si decide, cosa succede in caso di disaccordo: messo per iscritto, prima che serva.',
      },
      {
        title: 'Trasferire nei tempi giusti',
        text: 'Definiamo strumenti e tempistiche del trasferimento — quote, immobili, patrimonio — coordinando gli aspetti fiscali e successori con i professionisti di riferimento. Un passaggio graduale e pianificato ha un costo; uno improvviso ne ha uno molto maggiore.',
      },
      {
        title: 'Accompagnare chi prende la guida',
        text: 'Deleghe progressive, affiancamento operativo, percorso di crescita per successori e prime linee. La continuità non si firma: si costruisce nei mesi in cui il fondatore c’è ancora e può ancora insegnare.',
      },
    ],
    claim:
      'La continuità non si firma: si costruisce nei mesi in cui il fondatore c’è ancora.',
    outcomes: [
      'Regole scritte prima che servano',
      'Un assetto societario che regge il cambio di guida',
      'Successori preparati, non solo nominati',
      'Relazioni con banche, clienti e fornitori trasferite, non perse',
    ],
    whenToTalk:
      'Quando i figli sono in azienda e i ruoli non sono chiari. Quando i figli non ci sono e va pensata un’alternativa. Quando i soci familiari sono cresciuti di numero e le decisioni si sono fatte lente. Idealmente: cinque anni prima di quando pensate serva.',
  },
  {
    slug: 'protezione-del-patrimonio',
    photo: '/images/sezioni/protezione-del-patrimonio.jpg',
    focus: '50% 42%',
    art: 'vault',
    num: '04',
    title: 'Protezione del patrimonio',
    plainTitle: 'Protezione del patrimonio',
    excerpt:
      'Mettiamo al sicuro ciò che avete costruito: un confine chiaro tra rischio d’impresa e beni personali, governance della ricchezza, valore che attraversa le generazioni.',
    lead: 'Un confine chiaro tra il rischio d’impresa e ciò che avete costruito.',
    metaDescription:
      'Separazione tra rischio d’impresa e patrimonio familiare: holding, veicoli dedicati, segregazione e governance della ricchezza. Soluzioni lecite e difendibili.',
    intro: [
      'Chi fa impresa accetta il rischio: fa parte del mestiere. Il problema nasce quando quel rischio non ha confini, e un contenzioso, una garanzia firmata anni prima o un evento imprevisto arrivano a toccare la casa di famiglia e i risparmi di trent’anni.',
      'Proteggere il patrimonio non significa sottrarsi alle proprie responsabilità. Significa decidere in anticipo, e alla luce del sole, quali beni rispondono dell’attività e quali no.',
    ],
    startingPoint:
      'In molte imprese familiari quel confine non esiste: gli immobili stanno nella società operativa, le garanzie personali sono decine e nessuno ne ha l’elenco completo, il marchio non è mai stato intestato a nessuno. E la protezione va costruita quando le acque sono calme: fatta sotto pressione è inefficace e contestabile.',
    steps: [
      {
        title: 'Mappare rischi e beni',
        text: 'Ricostruiamo l’inventario completo: società, immobili, partecipazioni, marchi, liquidità, polizze — e dall’altra parte esposizioni, garanzie personali rilasciate, contenziosi potenziali. Quasi sempre questa mappa, da sola, sorprende chi ce l’ha davanti.',
      },
      {
        title: 'Costruire i confini',
        text: 'Progettiamo la struttura che separa il rischio operativo dal patrimonio stabile: holding, separazione degli immobili dall’operativa, veicoli dedicati, strumenti di segregazione e strumenti assicurativi. Lavoriamo solo con soluzioni lecite e tracciabili: una struttura che non regge un controllo non è protezione, è un rischio in più.',
      },
      {
        title: 'Governare la ricchezza',
        text: 'Definiamo le regole del patrimonio familiare: chi amministra, come si investe, come si distribuisce, cosa accade in caso di premorienza o di disaccordo. È la parte che quasi nessuno affronta e che decide se il patrimonio arriva alla generazione successiva integro o frammentato.',
      },
      {
        title: 'Tenere in manutenzione',
        text: 'Le strutture invecchiano, le norme cambiano, le famiglie si allargano. Rivediamo periodicamente l’assetto per mantenerlo coerente con la realtà.',
      },
    ],
    claim:
      'La protezione si costruisce quando le acque sono calme. Sotto pressione è già tardi.',
    outcomes: [
      'Una mappa completa e aggiornata di beni ed esposizioni',
      'Una separazione netta e documentata tra impresa e famiglia',
      'Strumenti leciti, tracciabili e difendibili',
      'Regole di governo del patrimonio scritte e condivise',
    ],
    whenToTalk:
      'Quando avete firmato garanzie personali di cui non ricordate il numero. Quando gli immobili di famiglia sono ancora nella società che opera sul mercato. Quando state per aprire il capitale o affrontare il passaggio generazionale. Quando tutto va bene: è l’unico momento in cui si può fare davvero.',
  },
  {
    slug: 'internazionalizzazione',
    photo: '/images/sezioni/internazionalizzazione.jpg',
    focus: '72% 40%',
    art: 'global',
    num: '05',
    title: 'Internazionalizzazione',
    plainTitle: 'Internazionalizzazione',
    excerpt:
      'Portiamo l’impresa dove cresce il mercato: nuove sedi, nuovi paesi, una rete locale già attiva nei principali hub d’Europa e del Golfo.',
    lead: 'Portare l’impresa dove cresce il mercato, con qualcuno che è già lì.',
    metaDescription:
      'Apertura e trasferimento di sedi estere: scelta del paese, costituzione societaria, rapporti bancari e atterraggio operativo. Una rete tra Europa e Golfo.',
    intro: [
      'Aprire all’estero è una delle decisioni più costose che un’impresa possa prendere male. Il paese scelto per sentito dire, la società costituita in fretta, il conto corrente che non si riesce ad aprire, i primi sei mesi passati a capire come funziona invece che a vendere.',
      'Noi partiamo dalla domanda giusta: non “dove conviene aprire”, ma “cosa dovete andare a fare”. Il resto è conseguenza.',
    ],
    startingPoint:
      'Una sede estera regge solo se ha sostanza: attività reale, persone, decisioni prese sul posto. Le strutture nate solo per un vantaggio fiscale sono oggi il modo più rapido per attirare un accertamento. E l’ostacolo pratico che ferma più progetti non è la fiscalità: è il conto bancario, la compliance, il partner locale che non si trova.',
    steps: [
      {
        title: 'Scegliere il paese',
        text: 'Confrontiamo i mercati candidati su ciò che conta davvero per voi: dimensione e accessibilità del mercato, costo e disponibilità del lavoro, quadro normativo e fiscale, accesso al credito e al sistema bancario, tempi reali di avvio. Vi consegniamo un confronto, non una raccomandazione preconfezionata.',
      },
      {
        title: 'Costruire la struttura',
        text: 'Costituzione societaria, assetto partecipativo, adempimenti, apertura dei rapporti bancari, sostanza economica. Coordiniamo professionisti locali che conosciamo e che rispondono a noi: avete un solo interlocutore, non sei fusi orari di telefonate.',
      },
      {
        title: 'Atterrare davvero',
        text: 'Sede operativa, prime assunzioni o distacchi, fornitori, consulenti, primi contatti commerciali. È la fase in cui la presenza sul territorio fa la differenza: le porte, all’estero, le apre chi è già dentro.',
      },
      {
        title: 'Presidiare',
        text: 'Adempimenti ricorrenti, controllo di gestione della nuova entità, consolidamento con la casa madre, verifica periodica che la struttura resti coerente con quello che effettivamente ci fate.',
      },
    ],
    sections: [
      {
        eyebrow: 'Un solo interlocutore, ovunque serva.',
        title: 'La nostra rete',
        block: {
          paras: [
            'Presenza diffusa tra Europa e Golfo: la direzione a Milano, le sedi di Roma, Cracovia, Vilnius e Dubai, la lounge di Monaco per i primi incontri e le firme. Non uffici di rappresentanza sulla carta: presìdi con persone e relazioni locali.',
          ],
        },
      },
    ],
    faq: {
      title: 'Domande che ci fanno spesso',
      items: [
        {
          q: 'Per avere la sede legale all’estero basta costituire la società?',
          a: 'Per costituirla, sì: bastano pochi giorni e pochi documenti. Ma il certificato di iscrizione dice dove la società è iscritta, non dove vive. Per il fisco italiano conta la seconda cosa: se le decisioni si prendono in Italia, la società è italiana, qualunque cosa dica il registro estero.',
        },
        {
          q: 'Cosa rende una sede estera difendibile?',
          a: 'Una ragione economica reale, amministratori che operano sul posto, sostanza operativa — uffici, persone, contratti, costi — rapporti bancari attivi e documentazione ordinata. Tutto questo va dimostrabile a distanza di anni: la difesa di una struttura si costruisce quando la si crea, non quando arriva la verifica.',
        },
        {
          q: 'Conviene aprire solo per motivi fiscali?',
          a: 'No, e lo diciamo prima di iniziare. Una struttura costruita solo sull’aliquota è fragile per definizione, e il contenzioso arriva sempre anni dopo, quando ha già prodotto tutti i suoi effetti. La domanda giusta non è come avere una sede all’estero: è cosa andarci a fare.',
        },
      ],
    },
    claim:
      'La domanda giusta non è dove conviene aprire, ma cosa andate a fare.',
    outcomes: [
      'Una scelta del paese motivata dai vostri obiettivi, non dalla moda',
      'Una struttura societaria e bancaria operativa, non solo costituita',
      'Un referente unico che coordina i professionisti locali',
      'Una presenza estera con sostanza, sostenibile nel tempo',
    ],
    whenToTalk:
      'Quando i clienti esteri crescono e servirli dall’Italia è diventato scomodo. Quando cercate competenze che qui non trovate. Quando volete avvicinarvi a capitali e mercati del Golfo o dell’Est Europa. Quando avete già provato ad aprire e vi siete fermati alla banca.',
  },
  {
    slug: 'certificazioni-iso-e-made-in-italy',
    photo: '/images/sezioni/certificazioni-iso-e-made-in-italy.jpg',
    focus: '48% 30%',
    art: 'quality',
    num: '06',
    // TODO-CONTENUTO: verificare con il cliente quali schemi vengono
    // effettivamente seguiti. Nel testo sono citati per ambito e non per
    // sigla, per non dichiarare competenze non presidiate.
    title: 'Certificazioni ISO & Made in Italy',
    plainTitle: 'Certificazioni ISO e Made in Italy',
    excerpt:
      'Trasformiamo la qualità in vantaggio commerciale. Vi guidiamo alle certificazioni internazionali con enti accreditati, per vincere gare, filiere e nuovi mercati.',
    lead: 'Trasformare la qualità che già avete in un vantaggio che si vede.',
    metaDescription:
      'Certificazioni ISO e valorizzazione dell’origine italiana: analisi degli scostamenti, sistema di gestione, audit con enti accreditati e uso commerciale.',
    intro: [
      'Molte imprese lavorano bene da vent’anni e non hanno un solo documento che lo dimostri. Finché il cliente è quello di sempre, non è un problema. Lo diventa il giorno in cui una gara vi esclude, un capofila di filiera chiede il certificato, un buyer estero mette la conformità come condizione d’ingresso.',
      'La certificazione non serve a diventare migliori. Serve a rendere dimostrabile e ripetibile quello che già sapete fare.',
    ],
    startingPoint:
      'Le certificazioni prese “per avere il pezzo di carta” costano, non cambiano niente e all’audit successivo cadono. Quelle costruite bene lasciano in azienda processi più chiari, meno errori, meno dipendenza dalle persone chiave. Lo stesso vale per la valorizzazione dell’origine italiana: senza una filiera tracciata davvero è una dichiarazione, non un marchio.',
    steps: [
      {
        title: 'Capire cosa vi serve davvero',
        text: 'Partiamo dal mercato, non dallo standard: quali gare volete vincere, quali filiere presidiare, quali clienti ve lo stanno chiedendo. Da lì scegliamo gli schemi utili — qualità, ambiente, sicurezza sul lavoro, sicurezza delle informazioni, anticorruzione, o la valorizzazione dell’origine italiana — e scartiamo quelli che sarebbero solo un costo.',
      },
      {
        title: 'Analisi degli scostamenti',
        text: 'Confrontiamo come lavorate oggi con quanto lo standard richiede. Ne esce un elenco chiaro di cosa manca, chi deve intervenire e in quanto tempo. Nessuna sorpresa a metà percorso.',
      },
      {
        title: 'Costruire il sistema',
        text: 'Scriviamo procedure e documentazione insieme a chi il lavoro lo fa, formiamo le persone, mettiamo a terra registrazioni e indicatori. Il criterio è uno: il sistema deve descrivere l’azienda reale, non un’azienda ideale che nessuno riconosce.',
      },
      {
        title: 'Audit e mantenimento',
        text: 'Vi accompagniamo alla verifica con enti di certificazione accreditati e indipendenti, e restiamo per le sorveglianze successive. Poi la parte che quasi tutti dimenticano: usare la certificazione. Nei bandi, nei capitolati, nella documentazione commerciale, nella relazione con i clienti esteri.',
      },
    ],
    claim:
      'La certificazione non serve a diventare migliori: serve a renderlo dimostrabile.',
    outcomes: [
      'Gli schemi giusti per i mercati che vi interessano',
      'Un sistema di gestione che rispecchia l’azienda vera',
      'La certificazione rilasciata da un ente accreditato',
      'Un requisito d’accesso trasformato in argomento di vendita',
    ],
    whenToTalk:
      'Quando una gara vi ha esclusi per un requisito formale. Quando un grande cliente ha alzato l’asticella sui fornitori. Quando volete vendere all’estero e vi chiedono garanzie di conformità e di origine. Quando la qualità c’è, ma non si riesce a dimostrarla.',
  },
  {
    slug: 'riorganizzazione-e-sviluppo',
    photo: '/images/sezioni/riorganizzazione-e-sviluppo.jpg',
    focus: '54% 32%',
    art: 'boardroom',
    num: '07',
    title: 'Riorganizzazione e sviluppo',
    plainTitle: 'Riorganizzazione e sviluppo',
    excerpt:
      'Rimettiamo ordine nella macchina: ruoli, deleghe, indicatori e un piano che tiene insieme strategia e numeri. Perché l’azienda regga il passo successivo.',
    lead: 'Rimettere ordine nella macchina, prima di chiederle di correre più forte.',
    metaDescription:
      'Riorganizzazione aziendale, deleghe e controllo di gestione, business plan e accompagnamento al cambiamento. Perché l’impresa regga la crescita che ha davanti.',
    intro: [
      'Molte imprese crescono per accumulo. Si aggiungono prodotti, mercati, persone, e l’organizzazione resta quella di quando si era la metà. Finché il fondatore riesce a tenere tutto in testa, funziona. Poi smette di funzionare — e il sintomo non è mai l’organizzazione: sono i margini che calano, le decisioni che rallentano, le persone brave che se ne vanno.',
    ],
    startingPoint:
      'Riorganizzare non significa disegnare un organigramma. Significa rispondere a tre domande scomode: chi decide cosa, come si misura se sta andando bene, e cosa succede il giorno in cui il fondatore non c’è. Un’azienda che non sa rispondere è un’azienda che vale meno — al tavolo di una trattativa, davanti a una banca, agli occhi di un successore.',
    steps: [
      {
        title: 'Leggere l’azienda com’è',
        text: 'Processi reali, non quelli dichiarati. Ruoli, deleghe, colli di bottiglia, dipendenze da singole persone. Ascoltiamo chi il lavoro lo fa, non solo chi lo racconta.',
      },
      {
        title: 'Rimettere a fuoco la struttura',
        text: 'Responsabilità assegnate, deleghe scritte, riunioni che servono a decidere. E un sistema di controllo di gestione essenziale: pochi indicatori, letti ogni mese, che dicano davvero come sta andando.',
      },
      {
        title: 'Costruire il piano',
        text: 'Un business plan che tenga insieme la strategia e i numeri: dove volete arrivare, con quali risorse, in quanto tempo, e cosa succede se le cose vanno peggio del previsto. È il documento che serve a voi per guidare e agli altri per credervi.',
      },
      {
        title: 'Accompagnare il cambiamento',
        text: 'Le riorganizzazioni falliscono nell’esecuzione, non nel disegno. Restiamo nei mesi in cui il nuovo assetto va reso abitudine.',
      },
    ],
    claim:
      'Le riorganizzazioni falliscono nell’esecuzione, non nel disegno.',
    outcomes: [
      'Responsabilità assegnate e messe per iscritto',
      'Pochi indicatori, letti con regolarità',
      'Un piano che tiene insieme strategia e numeri',
      'Un’azienda che non dipende da una sola testa',
    ],
    whenToTalk:
      'Quando il fatturato cresce e il margine no. Quando ogni decisione passa dalla stessa scrivania. Quando state per aprire il capitale, passare il testimone o entrare in un mercato nuovo — e sapete che così com’è, l’azienda non regge il passo successivo.',
  },
];
