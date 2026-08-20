/**
 * Le persone dello studio, su due livelli.
 *
 * `guida`   — chi siede nel consiglio: scheda estesa, con la riga di nota.
 * `partner` — la compagine dei partner: scheda essenziale, nome e ruolo.
 *
 * Le note delle tre figure di guida riprendono quanto dichiarato nel
 * Comunicato stampa 01/2026. Per i partner il comunicato non entra nel
 * merito delle singole competenze: finché non arrivano le note biografiche
 * la scheda resta a nome e ruolo, e la descrizione del gruppo sta
 * nell'occhiello di sezione (src/pages/team.astro).
 */

export type Tier = 'guida' | 'partner';

export interface Member {
  /** Iniziali per il monogramma di ripiego */
  mono: string;
  name: string;
  role: string;
  tier: Tier;
  /** Riga di descrizione: solo per le figure di guida */
  note?: string;
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
    role: 'Presidente & Co-fondatore',
    tier: 'guida',
    note: 'Fonda lo studio e ne presiede il consiglio. Trentotto anni tra marketing, eventi e ottimizzazione dei processi.',
    photo: '/images/team/fulvio-rossi.jpg',
  },
  {
    mono: 'CR',
    name: 'Carolina Rossi',
    role: 'Amministratore Delegato',
    tier: 'guida',
    // NOTA: il Comunicato stampa 01/2026 le attribuisce anche la carica di
    // vicepresidente, che qui è in capo a Gerard Haoun. Da sciogliere col
    // cliente prima di pubblicare entrambe le cariche.
    note: 'Guida la struttura e presidia le operazioni, dal primo incontro alla firma.',
    photo: '/images/team/carolina-rossi.jpg',
  },
  {
    mono: 'GH',
    name: 'Gerard Haoun',
    role: 'Vice Presidente & Co-fondatore',
    tier: 'guida',
    // TODO-CONTENUTO: confermare la riga di ruolo con l'interessato
    note: 'Rete internazionale e relazioni con gli investitori.',
    photo: '/images/team/gerard-haoun.jpg',
  },

  /* --- Partner ------------------------------------------------------------
     TODO-CONTENUTO: per ciascuno serve la riga di competenza. Di Luca Basso
     manca il ritratto (per ora monogramma); Simona Giorgetti non compare nel
     comunicato, il ruolo «Partner» è da confermare. */
  {
    mono: 'PD',
    name: 'Pablo Docimo',
    role: 'Partner',
    tier: 'partner',
    photo: '/images/team/pablo-docimo.jpg',
  },
  {
    mono: 'MC',
    name: 'Michelangelo Chasseur',
    role: 'Partner',
    tier: 'partner',
    photo: '/images/team/michelangelo-chasseur.jpg',
  },
  {
    mono: 'GC',
    name: 'Giuseppe Catizone',
    role: 'Partner',
    tier: 'partner',
    photo: '/images/team/giuseppe-catizone.jpg',
  },
  {
    mono: 'SG',
    name: 'Simona Giorgetti',
    role: 'Partner',
    tier: 'partner',
    photo: '/images/team/simona-giorgetti.jpg',
  },
  // In coda finché non arriva il ritratto: il monogramma di ripiego, in fila
  // con quattro fotografie, è meno evidente all'ultimo posto che al primo.
  {
    mono: 'LB',
    name: 'Luca Basso',
    role: 'Partner',
    tier: 'partner',
  },
];

export const guida = team.filter((m) => m.tier === 'guida');
export const partner = team.filter((m) => m.tier === 'partner');
