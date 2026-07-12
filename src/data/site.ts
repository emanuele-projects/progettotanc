export const site = {
  brand: 'FULVIO ROSSI PLUS',
  brandSub: 'M&A · Deep Consulting',
  title: 'Fulvio Rossi Plus — Advisor M&A e Deep Consulting',
  description:
    'Advisor M&A e deep consulting dal 1989: operazioni straordinarie, finanza d’impresa, passaggio generazionale e protezione del patrimonio. Sette sedi tra Europa e Golfo.',
  foundedYear: 1989,
  // TODO-CONTENUTO: contatti reali
  email: 'direzione@fulviorossiplus.it',
  phone: '+39 011 000 0000',
  address: 'Via Garibaldi, 2 — Torino',
  piva: 'Ragione sociale · P.IVA da inserire',
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Evidenziato in oro (firma Mentoria) */
  highlight?: boolean;
}

/** Ordine modellato sulla nav del sito di riferimento (CookGroup);
    ogni voce ha la sua pagina dedicata. Mentoria è resa come
    bottone oro in evidenza nell'header. */
export const nav: NavItem[] = [
  { label: 'Servizi', href: '/servizi' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Team', href: '/team' },
  { label: 'Sedi', href: '/sedi' },
  { label: 'News', href: '/news' },
  { label: 'Contatti', href: '/contatti' },
  { label: 'Mentoria', href: '/mentoria', highlight: true },
];

export const ctaLabel = 'Incontro riservato';
export const ctaHref = '/contatti';
