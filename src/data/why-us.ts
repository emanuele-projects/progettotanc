export interface WhyPoint {
  title: string;
  text: string;
}

export const whyUs: WhyPoint[] = [
  {
    title: 'Una sola regìa',
    text: 'Legali, fiscalisti, revisori e advisor finanziari lavorano sotto un’unica direzione. Un solo interlocutore, una sola responsabilità.',
  },
  {
    title: 'Dal 1989',
    text: 'Oltre trent’anni accanto alle imprese familiari italiane: cicli espansivi, crisi, passaggi di testimone. Li abbiamo attraversati tutti.',
  },
  {
    title: 'Riservatezza assoluta',
    text: 'Le operazioni straordinarie si costruiscono nel silenzio. Ogni incarico è protetto da riservatezza rigorosa, dal primo incontro alla firma.',
  },
  {
    title: 'Rete tra Europa e Golfo',
    text: 'Sette sedi nei centri finanziari che contano: accesso diretto a capitali, partner e mercati, senza intermediari.',
  },
];

export interface Badge {
  label: string;
  note: string;
}

// TODO-CONTENUTO: loghi e accreditamenti reali
export const badges: Badge[] = [
  { label: 'ISO 9001', note: 'Qualità' },
  { label: 'ISO 14001', note: 'Ambiente' },
  { label: 'ISO 45001', note: 'Sicurezza' },
  { label: 'Made in Italy', note: 'Filiera certificata' },
  { label: 'Enti accreditati', note: 'Partner di certificazione' },
  { label: 'Logo da inserire', note: 'Riconoscimento' },
];
