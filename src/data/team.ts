export interface Member {
  /** Iniziali per il monogramma; '—' se placeholder */
  mono: string;
  name: string;
  role: string;
  note: string;
}

// TODO-CONTENUTO: nomi e ritratti reali
export const team: Member[] = [
  { mono: 'FR', name: 'Fulvio Rossi', role: 'Fondatore & Presidente', note: 'Ritratto da inserire' },
  { mono: '—', name: 'Amministratore Delegato', role: 'Direzione & operazioni', note: 'Nome e ritratto da inserire' },
  { mono: '—', name: 'Partner — M&A & Finanza', role: 'Operazioni straordinarie', note: 'Nome e ritratto da inserire' },
  { mono: '—', name: 'Partner — Fiscale & Tributario', role: 'Struttura & pianificazione', note: 'Nome e ritratto da inserire' },
  { mono: '—', name: 'Partner — Legale societario', role: 'Governance & contratti', note: 'Nome e ritratto da inserire' },
  { mono: '—', name: 'Business Coach', role: 'Mentoria & leadership', note: 'Nome e ritratto da inserire' },
];
