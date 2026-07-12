/**
 * Prefissa i percorsi interni con la base del deploy.
 * - hosting finale (root): base '/' → i link restano invariati
 * - GitHub Pages (progetto): base '/sitotanc/' → '/servizi/' diventa '/sitotanc/servizi/'
 * Passa attraverso mailto:, tel:, #ancore e URL esterni.
 */
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL;
  return base.replace(/\/$/, '') + path;
}
