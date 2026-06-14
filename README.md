# EHBT — Eerste Hulp bij Trauma

Een statische website (vanilla HTML/CSS/JS, hash-router, geen buildstap) met
rustige, onderbouwde uitleg over trauma en herstel. Zustersite van
*EHBO — Eerste Hulp bij Opvoeden*; zelfde fonts en opzet, eigen rustgevend palet.

## Lokaal draaien

```bash
python3 -m http.server 4174 --directory "."
# open http://localhost:4174
```

## Structuur

- `index.html` — shell: kop, mobiele zoekbalk, menu, zoeklaag, footer (met crisislijnen).
- `css/base.css` — designtokens (palet), typografie, kop/voet, animaties.
- `css/components.css` — kaarten, swimlanes, accordeon, detailpagina's, trauma-specifieke blokken.
- `js/data-boeken.js` — `BOEKEN`, `THEMAS`, `LEEFTIJDEN` (doelgroepen).
- `js/data-vragen-1.js`, `js/data-vragen-2.js` — `VRAGEN_1`, `VRAGEN_2`.
- `js/data-therapieen.js` — `THERAPIEEN`.
- `js/data-uitgelegd.js` — `CONCEPTEN`, `HECHTINGSSTIJLEN`, `STOORNISSEN`.
- `js/data-extra.js` — `CRISISLIJNEN`, `NOODHULP`, `MYTHES`, `REGELS`.
- `js/app.js` — router, renderers, zoeken, animaties.

Databestanden laden vóór `app.js`. Voeg vragen toe door arrays in de
`data-vragen-*.js` bestanden uit te breiden (of een nieuw bestand te maken en
te registreren in `index.html` + de `VRAGEN`-aggregatie in `app.js`).

## Inhoud (stand van zaken)

| Onderdeel | Aantal |
|---|---|
| Boeken in boekenkast | 58 |
| Praktische vragen | 200 |
| Mythes ontkracht | 17 |
| Concepten uitgelegd | 14 |
| Therapieën | 12 |
| Acute hulpplannen | 9 |
| Grondbeginselen | 13 |

Bronnen zijn geïnspireerd op de werken in de map `Trauma-CPTSD-Somatisch/` (opvoeden-project) en andere traumaliteratuur — geen overgenomen boektekst.

- **Onafhankelijk geschreven.** Alle teksten (vraagantwoorden, therapie- en
  conceptuitleg, boeksamenvattingen, mythes) zijn eigen tekst, geïnspireerd op
  de genoemde werken — **geen overgenomen boektekst**. De site bevat geen
  boekbestanden of officiële samenvattingen, alleen bibliografische
  verwijzingen en zoeklinks.
- **Geen privémateriaal.** Privébronnen (boek-PDF's/EPUB's, persoonlijke
  foto's en profielen) horen buiten dit project, bv. in
  `/Users/<naam>/Downloads/opvoeden-bronnen-prive/`. Ze staan in `.gitignore`,
  `.vercelignore` en `.netlifyignore` en mogen nooit in de webmap of repo.
- **Educatief, geen hulpverlening.** De inhoud is informatief en **geen
  vervanging voor professionele psychologische, psychiatrische of medische
  hulp**, en geen diagnose. Persoonlijkheidsstoornissen worden alleen door een
  professional vastgesteld.
- **Crisis.** Crisislijnen (België/Vlaanderen) staan in de footer en boven elke
  acute-hulppagina: **112** (acuut gevaar), **1813** (Zelfmoordlijn),
  **106** (Tele-Onthaal).

## Evidentieniveaus

De labels bij therapieën (*sterk onderbouwd*, *veelbelovend*, *in ontwikkeling*)
zijn algemene, oriënterende inschattingen — geen behandeladvies. De keuze van
een therapie hoort thuis in een gesprek met een gekwalificeerde hulpverlener.
