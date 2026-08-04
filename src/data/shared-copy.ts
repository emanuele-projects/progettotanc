/**
 * Elementi trasversali — fonte: «FRP — Copy definitivi per la messa in pagina»,
 * sezione «Elementi riutilizzabili». Testi brevi da usare su più pagine, a
 * discrezione dell'impaginazione: tenerli qui evita di duplicarli nei template
 * e rende esplicito quali sono già in pagina e quali restano disponibili.
 */

/** Callout delle pagine servizio */
export const serviceCallout = {
  /** micro-frase usata come occhiello del callout */
  eyebrow: 'Sediamo al tavolo con voi, non dietro di voi.',
  text: 'Un nucleo stabile, una rete ampia, una sola regìa. Coordiniamo noi legali, fiscalisti e specialisti: voi avete un interlocutore, non una rubrica.',
} as const;

/**
 * Chiusura delle pagine servizio — due varianti intercambiabili.
 * A: pagine di dettaglio · B: indice servizi.
 */
export const serviceClosing = {
  a: 'Ogni impresa è un caso a sé. Prima di proporvi qualcosa vogliamo capire se e come possiamo esservi utili — e se non lo siamo, ve lo diciamo.',
  b: 'Il primo incontro serve a fare una diagnosi, non a vendervi un mandato.',
} as const;

/**
 * Micro-frasi per occhielli, callout e sottotitoli. Dove sono già in pagina
 * è indicato accanto; le altre restano a disposizione dell'impaginazione.
 */
export const microCopy = {
  /** occhiello di «Il punto di partenza», pagine servizio */
  diagnosi: 'Diagnosi prima della proposta.',
  /** occhiello del callout, pagine servizio */
  tavolo: 'Sediamo al tavolo con voi, non dietro di voi.',
  /** occhiello di «La nostra rete», pagina Internazionalizzazione */
  interlocutore: 'Un solo interlocutore, sette sedi.',
  /** occhiello della CTA di chiusura, pagine servizio */
  momento: 'Se il momento non è quello giusto, ve lo diciamo.',
  /** occhiello di «Quando la tensione diventa crisi conclamata», pagina Finanza */
  crisi: 'Gestire la crisi finché gli strumenti servono ancora a qualcosa.',
} as const;
