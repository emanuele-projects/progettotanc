export interface Location {
  city: string;
  country: string;
  role: string;
  primary?: boolean;
}

export const locations: Location[] = [
  { city: 'Torino', country: 'Italia · Sede direzionale', role: 'Strategia & coordinamento', primary: true },
  { city: 'Milano', country: 'Italia', role: 'Finanza & capitali' },
  { city: 'Roma', country: 'Italia', role: 'Relazioni istituzionali' },
  { city: 'Dubai', country: 'Emirati Arabi Uniti', role: 'Capitali & mercati emergenti' },
  { city: 'Montecarlo', country: 'Principato di Monaco', role: 'Gestione patrimoniale' },
  { city: 'Cracovia', country: 'Polonia', role: 'Espansione Est Europa' },
  { city: 'Vilnius', country: 'Lituania', role: 'Innovazione & nuovi mercati' },
];
