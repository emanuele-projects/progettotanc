export type LocationType = 'direzionale' | 'legale' | 'sede' | 'lounge';

/** Etichetta al singolare, usata accanto ai punti sul globo */
export const typeLabels: Record<LocationType, string> = {
  direzionale: 'Sede direzionale',
  legale: 'Sede legale',
  sede: 'Sede',
  lounge: 'Lounge',
};

export interface Location {
  city: string;
  /** Sigla del paese — mai il nome per esteso */
  cc: string;
  /** Indirizzo completo, per footer, contatti e dati strutturati */
  address: string;
  type: LocationType;
  primary?: boolean;
  /** Coordinate geografiche reali (per il globo) */
  lat: number;
  lng: number;
  /** Riga breve per la scheda del pin sul globo */
  note?: string;
}

/**
 * Cinque sedi più la lounge di Monaco, che sta nell'elenco con la sua
 * etichetta. I paesi sono indicati per sigla: IT vale per Milano e Roma.
 */
export const locations: Location[] = [
  {
    city: 'Milano',
    cc: 'IT',
    address: 'Via Settembrini, 7 — Milano',
    type: 'direzionale',
    primary: true,
    lat: 45.46,
    lng: 9.19,
    note: 'Direzione & coordinamento',
  },
  {
    city: 'Roma',
    cc: 'IT',
    address: 'Viale Marconi, 12 — Roma',
    type: 'sede',
    lat: 41.9,
    lng: 12.5,
    note: 'Relazioni istituzionali',
  },
  {
    city: 'Cracovia',
    cc: 'PL',
    address: 'ul. Podskale 1/14 — Cracovia',
    type: 'legale',
    lat: 50.06,
    lng: 19.94,
    note: 'Sede legale · amministrazione & societario',
  },
  {
    city: 'Vilnius',
    cc: 'LT',
    address: 'Gedimino prospektas 18, Città Vecchia — Vilnius',
    type: 'sede',
    lat: 54.69,
    lng: 25.28,
    note: 'Innovazione & nuovi mercati',
  },
  {
    city: 'Dubai',
    cc: 'EAU',
    address: 'Jumeirah Lakes Towers (JLT) — Dubai',
    type: 'sede',
    lat: 25.2,
    lng: 55.27,
    note: 'Capitali & mercati emergenti',
  },
  {
    city: 'Monaco',
    cc: 'Principato',
    address: '21 Rue Colonel Bellando de Castro — Monaco',
    type: 'lounge',
    lat: 43.74,
    lng: 7.42,
    note: 'Sala riunioni lounge dedicata a primo incontro e firme',
  },
];
