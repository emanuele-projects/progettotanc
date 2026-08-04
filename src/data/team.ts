export interface Member {
  /** Iniziali per il monogramma di ripiego */
  mono: string;
  name: string;
  role: string;
  note: string;
  /**
   * Ritratto reale, quando disponibile (es. '/images/team/fulvio-rossi.jpg').
   * Se assente si usa il placeholder BrandArt.
   */
  photo?: string;
}

export const team: Member[] = [
  {
    mono: 'FR',
    name: 'Fulvio Rossi',
    role: 'Presidente & Co-fondatore',
    note: 'Visione, regìa e garanzia dello studio',
    photo: '/images/team/fulvio-rossi.jpg',
  },
  {
    mono: 'CR',
    name: 'Carolina Rossi',
    role: 'Amministratore Delegato',
    note: 'Direzione e operazioni',
    photo: '/images/team/carolina-rossi.jpg',
  },
  {
    mono: 'GH',
    name: 'Gerard Haoun',
    role: 'Vice Presidente & Co-fondatore',
    // TODO-CONTENUTO: confermare la riga di ruolo con l'interessato
    note: 'Rete internazionale e relazioni con gli investitori',
    photo: '/images/team/gerard-haoun.jpg',
  },
];
