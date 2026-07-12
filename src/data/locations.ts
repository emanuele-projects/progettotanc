export interface Location {
  city: string;
  country: string;
  role: string;
  primary?: boolean;
  /** Coordinate geografiche reali (per il globo) */
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  { city: 'Torino', country: 'Italia · Sede direzionale', role: 'Strategia & coordinamento', primary: true, lat: 45.07, lng: 7.69 },
  { city: 'Milano', country: 'Italia', role: 'Finanza & capitali', lat: 45.46, lng: 9.19 },
  { city: 'Roma', country: 'Italia', role: 'Relazioni istituzionali', lat: 41.9, lng: 12.5 },
  { city: 'Dubai', country: 'Emirati Arabi Uniti', role: 'Capitali & mercati emergenti', lat: 25.2, lng: 55.27 },
  { city: 'Montecarlo', country: 'Principato di Monaco', role: 'Gestione patrimoniale', lat: 43.74, lng: 7.42 },
  { city: 'Cracovia', country: 'Polonia', role: 'Espansione Est Europa', lat: 50.06, lng: 19.94 },
  { city: 'Vilnius', country: 'Lituania', role: 'Innovazione & nuovi mercati', lat: 54.69, lng: 25.28 },
];
