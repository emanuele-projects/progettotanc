export interface Member {
  /** Iniziali per il monogramma di ripiego */
  mono: string;
  name: string;
  role: string;
  note: string;
  /**
   * Ritratto reale, quando disponibile (es. '/images/team/fulvio-rossi.jpg').
   * Se assente si usa il placeholder BrandArt. Bastano 2–3 foto vere.
   */
  photo?: string;
}

// TODO-CONTENUTO: nome dell'avvocato e ritratti reali (Fulvio, Carolina, Avv.)
export const team: Member[] = [
  {
    mono: 'FR',
    name: 'Fulvio Rossi',
    role: 'Fondatore & Presidente',
    note: 'Visione, regìa e garanzia dello studio',
  },
  {
    mono: 'CR',
    name: 'Carolina Rossi',
    role: 'Amministratore Delegato',
    note: 'Direzione e operazioni',
  },
  {
    mono: 'AL',
    name: 'Avv. [Nome Cognome]',
    role: 'Of Counsel · Area Legale',
    note: 'Governance, contratti e tutela del patrimonio',
  },
];
