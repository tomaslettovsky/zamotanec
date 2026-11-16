# Zamotanec

Webová appka na pohybovou hru: losuje barvu (červená, zelená, žlutá, modrá) a končetinu (levá/pravá ruka, levá/pravá noha).

Kurzy venku · Tomáš Lettovský · [kurzyvenku.cz](https://kurzyvenku.cz)

## Funkce
- Změna klepnutím na obrazovku, nebo časovačem s pevným intervalem 5–60 s
- Český hlas („Levá ruka, červená“), jde vypnout, funguje i se sluchátky
- Stejná kombinace nepadne dvakrát po sobě
- Displej se během hry drží rozsvícený (Screen Wake Lock API, pokud ho prohlížeč podporuje)
- Funguje offline a jde přidat na plochu iPhonu

## Soubory
- `index.html`: celá appka (HTML, CSS, JS v jednom souboru)
- `manifest.webmanifest`, `img/`: ikony a nastavení pro plochu
- `sw.js`: offline mezipaměť. Při úpravě souborů zvýšit `VERSION`.

## Nasazení
GitHub Pages z větve `main`, složka `/ (root)`.
