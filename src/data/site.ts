export const site = {
  brand: 'FULVIO ROSSI PLUS',
  brandSub: 'M&A · Deep Consulting',
  title: 'Fulvio Rossi Plus — Advisor M&A e Deep Consulting',
  description:
    'Advisor M&A e deep consulting dal 1989: operazioni straordinarie, finanza d’impresa, passaggio generazionale e tutela del patrimonio. Sedi tra Europa e Golfo.',
  foundedYear: 1989,
  // TODO-CONTENUTO: telefono reale
  email: 'info@fulviorossiplus.com',
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
  // Team e Sedi confluiti in un'unica pagina "Team & Sedi"
  { label: 'Team & Sedi', href: '/team' },
  { label: 'News', href: '/news' },
  // "Contatti" rimosso: duplicava il CTA "Incontro riservato" (→ /contatti)
  { label: 'Mentoria', href: '/mentoria', highlight: true },
];

export const ctaLabel = 'Incontro riservato';
export const ctaHref = '/contatti';

/**
 * Dati per privacy e cookie policy.
 *
 * TODO-LEGALE: i campi marcati «DA COMPLETARE» vanno riempiti prima della
 * pubblicazione — senza di essi l'informativa non è validamente resa
 * (art. 13 GDPR richiede l'identità del titolare). Vedi il README.
 */
export const legal = {
  /** Ragione sociale completa del titolare del trattamento */
  entity: 'DA COMPLETARE — ragione sociale',
  vat: 'DA COMPLETARE — P.IVA',
  rea: 'DA COMPLETARE — iscrizione REA',
  /** Sede legale del titolare */
  registeredOffice: 'DA COMPLETARE — sede legale',
  /** Indirizzo a cui l'interessato esercita i propri diritti */
  // Meglio un indirizzo dedicato (es. privacy@) quando sarà disponibile
  privacyEmail: 'info@fulviorossiplus.com',
  pec: 'DA COMPLETARE — PEC',
  /** Responsabile della protezione dei dati, se nominato */
  dpo: null as string | null,
  /** Ultimo aggiornamento delle informative */
  updated: '4 agosto 2026',
} as const;
