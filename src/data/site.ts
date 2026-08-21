export const site = {
  brand: 'FULVIO ROSSI PLUS',
  brandSub: 'Deep Consulting & Mentoria',
  title: 'Fulvio Rossi Plus · Deep Consulting e finanza d’impresa',
  description:
    'Deep consulting dal 1989: compravendita di aziende, finanza d’impresa, passaggio generazionale e tutela del patrimonio. Presenza diffusa tra Europa e Golfo.',
  foundedYear: 1989,
  email: 'direzione@fulviorossiplus.com',
  /**
   * I tre recapiti forniti dal cliente. Il primo è quello di riferimento
   * dove serve un numero solo.
   *
   * NOTA: il terzo è indicato dal cliente come «Saudi Arabia», ma il prefisso
   * +971 e la bandiera sono degli Emirati Arabi Uniti, dove sta la sede di
   * Dubai. Qui è riportato come EAU — da confermare.
   */
  phones: [
    { area: 'Italia', number: '+39 351 667 9335', tel: '+393516679335' },
    { area: 'Polonia', number: '+48 530 888 863', tel: '+48530888863' },
    { area: 'Emirati Arabi Uniti', number: '+971 4 347 0169', tel: '+97143470169' },
  ],
  address: 'Via Settembrini 7, Milano',
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
  { label: 'Blog', href: '/blog' },
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
  entity: 'DA COMPLETARE: ragione sociale',
  vat: 'DA COMPLETARE: P.IVA',
  rea: 'DA COMPLETARE: iscrizione REA',
  /** Sede legale del titolare */
  registeredOffice: 'ul. Podskale 1/14, Cracovia (Polonia)',
  /** Indirizzo a cui l'interessato esercita i propri diritti */
  // Meglio un indirizzo dedicato (es. privacy@) quando sarà disponibile
  privacyEmail: 'direzione@fulviorossiplus.com',
  pec: 'DA COMPLETARE: PEC',
  /** Responsabile della protezione dei dati, se nominato */
  dpo: null as string | null,
  /** Ultimo aggiornamento delle informative */
  updated: '4 agosto 2026',
} as const;
