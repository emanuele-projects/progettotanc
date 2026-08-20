/**
 * Le persone dello studio: un elenco unico, ordinato per ruolo.
 *
 * I ruoli sono quelli dichiarati dal cliente e dal Comunicato stampa 01/2026:
 * la presidenza a Fulvio Tancredi Rossi, l'amministrazione delegata e la
 * vicepresidenza a Carolina Rossi, la vicepresidenza e la co-fondazione a
 * Gerard Haoun, il ruolo di partner ai cinque che completano la compagine.
 */

export interface Member {
  /** Iniziali per il monogramma di ripiego */
  mono: string;
  name: string;
  role: string;
  /**
   * Ritratto reale, quando disponibile (es. '/images/team/fulvio-rossi.jpg').
   * Se assente si usa il placeholder BrandArt.
   */
  photo?: string;
}

export const team: Member[] = [
  {
    mono: 'FR',
    name: 'Fulvio Tancredi Rossi',
    role: 'Presidente e Co-fondatore',
    photo: '/images/team/fulvio-rossi.jpg',
  },
  {
    mono: 'CR',
    name: 'Carolina Rossi',
    role: 'Amministratore Delegato e Vice Presidente',
    photo: '/images/team/carolina-rossi.jpg',
  },
  {
    mono: 'GH',
    name: 'Gerard Haoun',
    role: 'Vice Presidente e Co-fondatore',
    photo: '/images/team/gerard-haoun.jpg',
  },
  {
    mono: 'PD',
    name: 'Pablo Docimo',
    role: 'Partner',
    photo: '/images/team/pablo-docimo.jpg',
  },
  {
    mono: 'MC',
    name: 'Michelangelo Chasseur',
    role: 'Partner',
    photo: '/images/team/michelangelo-chasseur.jpg',
  },
  {
    mono: 'GC',
    name: 'Giuseppe Catizone',
    role: 'Partner',
    photo: '/images/team/giuseppe-catizone.jpg',
  },
  {
    mono: 'SG',
    name: 'Simona Giorgetti',
    role: 'Partner',
    photo: '/images/team/simona-giorgetti.jpg',
  },
  // In coda finché non arriva il ritratto: il monogramma di ripiego, in fila
  // con sette fotografie, è meno evidente all'ultimo posto che in mezzo.
  {
    mono: 'LB',
    name: 'Luca Basso',
    role: 'Partner',
  },
];
