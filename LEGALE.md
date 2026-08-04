# Cosa manca per chiudere il lato legale

Elenco di quello che serve prima del go-live. Non è un parere legale: è la lista
delle informazioni e delle decisioni che mancano al sito, da far validare a un
legale e a un consulente privacy.

Le voci marcate **bloccante** impediscono la pubblicazione: senza, il sito è
online in violazione.

---

## 1. Identità del titolare — *bloccante*

Serve per l'informativa (art. 13 GDPR richiede l'identità del titolare) e per
l'identificazione dell'operatore in rete. Vanno in `legal` (`src/data/site.ts`),
oggi segnati «DA COMPLETARE» e visibili in pagina.

- Ragione sociale completa e forma giuridica del soggetto che gestisce il sito
- Partita IVA e codice fiscale
- Sede legale
- Numero REA e Registro imprese di iscrizione
- Capitale sociale, se S.p.A. o S.r.l. (art. 2250 c.c.)
- PEC
- Se le sedi estere fanno capo a **società diverse**: quale di esse è il titolare
  del trattamento, e se le altre sono contitolari (serve accordo ex art. 26) o
  responsabili (accordo ex art. 28)

## 2. Recapiti reali — *bloccante*

Oggi in `src/data/site.ts` ci sono segnaposto (`+39 011 000 0000`).

- Telefono
- Email generale e **email dedicata alle richieste privacy**
- Conferma che `direzione@fulviorossiplus.it` sia attiva
- Se esiste un DPO: nome e recapito (altrimenti si conferma che non è stato
  nominato, come dice oggi l'informativa)

## 3. Fornitori da nominare responsabili — *bloccante*

Ogni fornitore che tratta dati per conto vostro va nominato con accordo ex
art. 28 e citato in informativa.

- Hosting: ragione sociale, sede, dove stanno i server
- Provider di posta
- Servizio del form contatti (vedi punto 5)
- WordPress, se ospitato da terzi
- Google Ireland Limited, quando attiverete GTM/Analytics/Maps/YouTube

## 4. Tempi di conservazione — *bloccante*

L'informativa li chiede espressamente e oggi sono segnaposto.

- Quanto tenete le richieste di contatto che non diventano incarico
- Quanto durano i log tecnici dell'hosting
- Politica per i dati dei clienti acquisiti

## 5. Form contatti

Oggi è un `mailto:`: apre il client di posta, non trasmette nulla a un server.
Se diventa un form vero servono:

- Endpoint scelto (Formspree, Web3Forms, endpoint WordPress…) e relativo DPA
- Checkbox di presa visione dell'informativa, **non pre-spuntata**
- Protezione antispam: se è reCAPTCHA, va dichiarato in informativa e trattato
  come terza parte con cookie

## 6. Banner cookie / CMP — *bloccante prima di attivare GTM*

GTM, Analytics, Maps e YouTube **non sono installati**. Non vanno installati
finché non c'è il consenso: servono

- una CMP con Google Consent Mode v2 e blocco preventivo dei tag
- rifiuto tanto facile quanto l'accettazione (linee guida del Garante, 2021)
- link «Preferenze cookie» in footer per revocare
- Maps e YouTube caricati dietro segnaposto, non all'apertura della pagina
- ID di misurazione GA4 e container GTM, per completare la tabella dei cookie
- decisione sull'uso di `youtube-nocookie.com` (l'informativa oggi lo dà per
  scelto)

## 7. Immagini generate con AI — *bloccante*

I tre ritratti del team sono immagini AI presentate come fotografie di persone
reali, con nome e ruolo. È il punto più delicato della lista.

- **Sostituirle con fotografie vere** è la strada consigliata
- Se restano, va verificato con il legale il rischio di pratica commerciale
  ingannevole (artt. 21-22 Codice del consumo): un ritratto AI di una persona
  reale comunica qualcosa che non è vero
- Vanno comunque acquisiti i **consensi scritti** delle tre persone alla
  pubblicazione di nome, ruolo e immagine (artt. 96-97 legge sul diritto
  d'autore)
- Se in futuro si usano immagini AI per contesti non di persone, valutare
  l'obbligo di marcatura introdotto dall'AI Act per i contenuti sintetici

## 8. Contenuti da verificare

- **Recensioni clienti** (`src/data/quotes.ts`): oggi sono testi generici non
  attribuiti. Se non provengono da clienti reali vanno rimosse — le
  testimonianze inventate sono pratica commerciale ingannevole. Se sono reali,
  serve il consenso e va conservata la prova
- **«Dal 1989»** e **«trentacinque anni»** (pagina Chi siamo): vanno allineati
  fra loro e supportati dalla data di costituzione reale
- **«Sette sedi»**: verificare che ogni indirizzo corrisponda a una sede
  effettiva del soggetto titolare e non di società terze
- **Certificazioni** (pagina 06 e badge): quali schemi sono davvero presidiati.
  Oggi sono indicati per ambito e non per sigla proprio per non dichiarare
  competenze non presidiate

## 9. Attività e disclaimer

- Verificare se le attività descritte (M&A, ricerca di capitali, ristrutturazione
  del debito) richiedono iscrizioni o abilitazioni nelle giurisdizioni in cui
  operate, e se il sito debba riportarle
- Valutare un disclaimer che chiarisca che i contenuti sono informativi e non
  costituiscono consulenza personalizzata
- Verificare che la presentazione dell'attività non configuri offerta al
  pubblico di servizi riservati

## 10. Dominio e go-live

- Dominio definitivo, da impostare in `astro.config.mjs` e `public/robots.txt`
- Titolarità del dominio e del marchio «Fulvio Rossi Plus»
- Diritti sul logo FR+: chi lo ha realizzato e a chi appartengono

---

## Stato attuale delle informative

`/privacy` e `/cookie` sono **bozze tecniche**. Coprono la struttura richiesta
dal GDPR e descrivono gli strumenti previsti, ma vanno riviste da un legale e
completate con i dati sopra. I campi mancanti compaiono in pagina evidenziati
come «DA COMPLETARE», così non è possibile pubblicarle per distrazione.
