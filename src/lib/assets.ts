import fs from 'node:fs';
import path from 'node:path';

/**
 * Vero se il file esiste davvero in `public/`.
 *
 * I ritratti del team sono referenziati in `src/data/team.ts` anche prima che
 * le foto arrivino: questo controllo — eseguito in fase di build, il sito è
 * statico — fa ricadere i componenti sul segnaposto BrandArt invece di
 * pubblicare immagini rotte. Appena i file vengono depositati in
 * `public/images/team/` i ritratti compaiono senza toccare il codice.
 */
export function hasPublicAsset(assetPath: string): boolean {
  if (!assetPath.startsWith('/')) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', assetPath.slice(1)));
}
