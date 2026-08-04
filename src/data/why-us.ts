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
    text: 'Otto sedi nei centri finanziari che contano: accesso diretto a capitali, partner e mercati, senza intermediari.',
  },
];

export interface Badge {
  label: string;
  note: string;
}

/**
 * Ambiti di certificazione, negli stessi termini usati dalla pagina servizio 06.
 * Sono indicati per ambito e non per sigla, come chiede il documento copy, per
 * non dichiarare competenze non presidiate.
 *
 * TODO-CONTENUTO: una volta verificati con il cliente gli schemi effettivamente
 * seguiti, qui si possono riportare le sigle e i loghi degli enti accreditati.
 */
export const badges: Badge[] = [
  { label: 'Qualità', note: 'Sistemi di gestione' },
  { label: 'Ambiente', note: 'Impatti e conformità' },
  { label: 'Sicurezza sul lavoro', note: 'Salute e prevenzione' },
  { label: 'Sicurezza delle informazioni', note: 'Dati e continuità' },
  { label: 'Anticorruzione', note: 'Controlli e trasparenza' },
  { label: 'Origine italiana', note: 'Filiera tracciata' },
];
