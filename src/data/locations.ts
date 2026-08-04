export type LocationType = 'direzionale' | 'legale' | 'rappresentanza';

/** Etichetta al singolare, usata accanto ai punti sul globo */
export const typeLabels: Record<LocationType, string> = {
  direzionale: 'Sede direzionale',
  legale: 'Sede legale',
  rappresentanza: 'Sede di rappresentanza',
};

export interface Location {
  city: string;
  country: string;
  /** Indirizzo completo, per footer, contatti e dati strutturati */
  address: string;
  type: LocationType;
  primary?: boolean;
  /** Coordinate geografiche reali (per il globo) */
  lat: number;
  lng: number;
  /** Riga breve per la scheda del pin sul globo */
  note?: string;
  /**
   * Sede da non mettere in evidenza: resta fra i recapiti della pagina
   * Contatti — è un indirizzo reale — ma non compare fra i pin del globo,
   * nelle schede di sezione né nell'elenco città del footer.
   */
  quiet?: boolean;
}

/**
 * Le sedi, con gli indirizzi forniti dal cliente. Montecarlo e Gibilterra
 * sono marcate `quiet`: presenti nei recapiti, mai in evidenza.
 */
export const locations: Location[] = [
  // Direzionale — il cuore operativo e strategico
  {
    city: 'Torino',
    country: 'Italia',
    address: 'Via Garibaldi, 2 — Torino',
    type: 'direzionale',
    primary: true,
    lat: 45.07,
    lng: 7.69,
    note: 'Strategia & coordinamento',
  },
  {
    city: 'Milano',
    country: 'Italia',
    // TODO-CONTENUTO: indirizzo di Milano, non compreso nell'elenco fornito
    address: 'Milano',
    type: 'direzionale',
    lat: 45.46,
    lng: 9.19,
    note: 'Finanza & capitali',
  },
  // Legale — centro societario e amministrativo
  {
    city: 'Cracovia',
    country: 'Polonia',
    address: 'ul. Podskale 1/14 — Cracovia',
    type: 'legale',
    lat: 50.06,
    lng: 19.94,
    note: 'Centro societario & amministrativo',
  },
  // Rappresentanza — presìdi di relazione
  {
    city: 'Roma',
    country: 'Italia',
    address: 'Viale Marconi, 12 — Roma',
    type: 'rappresentanza',
    lat: 41.9,
    lng: 12.5,
    note: 'Relazioni istituzionali',
  },
  {
    city: 'Dubai',
    country: 'Emirati Arabi Uniti',
    address: 'Jumeirah Lakes Towers (JLT) — Dubai',
    type: 'rappresentanza',
    lat: 25.2,
    lng: 55.27,
    note: 'Capitali & mercati emergenti',
  },
  {
    city: 'Vilnius',
    country: 'Lituania',
    address: 'Gedimino prospektas 18, Città Vecchia — Vilnius',
    type: 'rappresentanza',
    lat: 54.69,
    lng: 25.28,
    note: 'Innovazione & nuovi mercati',
  },
  {
    city: 'Montecarlo',
    country: 'Principato di Monaco',
    address: '21 Rue Colonel Bellando de Castro — Monaco',
    type: 'rappresentanza',
    lat: 43.74,
    lng: 7.42,
    quiet: true,
  },
  {
    city: 'Gibilterra',
    country: 'Gibilterra',
    address: '9 Devils Tower Road, GX11 1AA — Gibilterra',
    type: 'rappresentanza',
    lat: 36.14,
    lng: -5.35,
    quiet: true,
  },
];

/** Le sedi da mettere in evidenza: globo, schede di sezione, elenco footer. */
export const featured = locations.filter((l) => !l.quiet);

export interface LocationGroup {
  type: LocationType;
  /** etichetta breve (occhiello) */
  tag: string;
  title: string;
  description: string;
  cities: Location[];
}

/**
 * Le sedi divise per funzione: è questo il modo in cui vanno raccontate
 * in home e nella pagina Team & Sedi — descrizione generica per gruppo,
 * non scheda per scheda. I gruppi mostrano solo le sedi in evidenza.
 */
export const locationGroups: LocationGroup[] = [
  {
    type: 'direzionale',
    tag: 'Direzione',
    title: 'Sedi direzionali',
    description:
      'Il cuore strategico e operativo dello studio: qui nascono le operazioni e si coordina il lavoro dei team.',
    cities: featured.filter((l) => l.type === 'direzionale'),
  },
  {
    type: 'legale',
    tag: 'Amministrazione',
    title: 'Sede legale',
    description: 'Il centro societario e amministrativo del gruppo.',
    cities: featured.filter((l) => l.type === 'legale'),
  },
  {
    type: 'rappresentanza',
    tag: 'Relazioni',
    title: 'Sedi di rappresentanza',
    description:
      'Presìdi di relazione sui mercati che contano: capitali, istituzioni e nuove opportunità, vicino a chi decide.',
    cities: featured.filter((l) => l.type === 'rappresentanza'),
  },
];
