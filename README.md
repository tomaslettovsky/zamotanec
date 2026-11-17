# Zamotanec

Webová appka na pohybovou a lezeckou hru: losuje končetinu a k ní barvu, nebo typ chytu.

Kurzy venku · Tomáš Lettovský · [kurzyvenku.cz](https://kurzyvenku.cz)

## Funkce
- Dva režimy losování:
  - **Barvy**: výběr z 9 barev (červená, oranžová, žlutá, zelená, modrá, fialová, růžová, bílá, černá), výchozí 4 základní; volitelně „Nohy volně“ (losují se jen ruce)
  - **Chyty**: madlo, lišta, spoďák, oblina, stisk, bočák, dírka; losují se jen ruce
- V obou režimech se v nastavení zaškrtává, co se losuje (aspoň 2 položky)
- Startovní pozice (volitelná): na začátku určí všechny končetiny (u chytů a s „Nohy volně“ jen ruce), hlas je přečte
- Odpočet startu (jen s časovačem, volitelný, 10–60 s po 5 s): začne po dočtení startovní pozice, v posledních 3 s pípá, pak se rozběhne časovač
- Stejná končetina nejvýš 2× po sobě, stejná kombinace nikdy hned po sobě
- Změna klepnutím na obrazovku, nebo časovačem s pevným intervalem 5–60 s
- Hlas: nahrávky Tomáše (`audio/`), jde vypnout, funguje i se sluchátky. Když se nahrávky nenačtou, použije se systémová syntéza řeči.
- Povzbuzování: po náhodném počtu 3–7 změn se po pokynu přehraje náhodná hláška (`audio/cheer-*.m4a`). S časovačem jen tehdy, když se vejde před další změnu. Jde vypnout.
- Displej se během hry drží rozsvícený (Screen Wake Lock API, pokud ho prohlížeč podporuje)
- Funguje offline a jde přidat na plochu iPhonu

## Soubory
- `index.html`: celá appka (HTML, CSS, JS v jednom souboru)
- `manifest.webmanifest`, `img/`: ikony a nastavení pro plochu
- `audio/`: nahrávky (`limb-*`, `color-*`, `hold-*`, `cheer-*`; AAC, ořezané, srovnaná hlasitost). Nová hláška = nový soubor `cheer-N.m4a` + položka v `CHEERS` v `index.html` + řádek v `sw.js`.
- `sw.js`: offline mezipaměť. Při úpravě souborů zvýšit `VERSION`.

## Nasazení
GitHub Pages z větve `main`, složka `/ (root)`, vlastní doména https://zamotanec.kurzyvenku.cz (soubor `CNAME`, DNS záznam CNAME u Českého hostingu → `tomaslettovsky.github.io`).

## Poznámky
- Hlas (Web Speech API) v tichém režimu telefonu nehraje (ověřeno na iPhonu). Appka na to upozorňuje v nastavení.
