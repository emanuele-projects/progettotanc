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
  type: LocationType;
  primary?: boolean;
  /** Coordinate geografiche reali (per il globo) */
  lat: number;
  lng: number;
}

/**
 * Sette sedi, ordinate per tipologia. L'ordine guida anche il footer
 * (che le raggruppa a blocchi di città).
 */
export const locations: Location[] = [
  // Direzionali — il cuore operativo e strategico
  { city: 'Torino', country: 'Italia', type: 'direzionale', primary: true, lat: 45.07, lng: 7.69 },
  { city: 'Milano', country: 'Italia', type: 'direzionale', lat: 45.46, lng: 9.19 },
  // Legale — centro societario e amministrativo
  { city: 'Cracovia', country: 'Polonia', type: 'legale', lat: 50.06, lng: 19.94 },
  // Rappresentanza — presìdi di relazione
  { city: 'Roma', country: 'Italia', type: 'rappresentanza', lat: 41.9, lng: 12.5 },
  { city: 'Dubai', country: 'Emirati Arabi Uniti', type: 'rappresentanza', lat: 25.2, lng: 55.27 },
  { city: 'Montecarlo', country: 'Principato di Monaco', type: 'rappresentanza', lat: 43.74, lng: 7.42 },
  { city: 'Vilnius', country: 'Lituania', type: 'rappresentanza', lat: 54.69, lng: 25.28 },
];

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
 * non scheda per scheda.
 */
export const locationGroups: LocationGroup[] = [
  {
    type: 'direzionale',
    tag: 'Direzione',
    title: 'Sedi direzionali',
    description:
      'Il cuore strategico e operativo dello studio: qui nascono le operazioni e si coordina il lavoro dei team.',
    cities: locations.filter((l) => l.type === 'direzionale'),
  },
  {
    type: 'legale',
    tag: 'Amministrazione',
    title: 'Sede legale',
    description: 'Il centro societario e amministrativo del gruppo.',
    cities: locations.filter((l) => l.type === 'legale'),
  },
  {
    type: 'rappresentanza',
    tag: 'Relazioni',
    title: 'Sedi di rappresentanza',
    description:
      'Presìdi di relazione sui mercati che contano: capitali, istituzioni e nuove opportunità, vicino a chi decide.',
    cities: locations.filter((l) => l.type === 'rappresentanza'),
  },
];
