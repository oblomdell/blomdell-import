# Blomdell Import

Webbplats för Blomdell Import, byggd med [Next.js](https://nextjs.org) (App Router) och Tailwind CSS.

## Kom igång

```bash
npm install
npm run dev
```

Öppna sedan [http://localhost:3000](http://localhost:3000).

## Struktur

| Sökväg                              | Innehåll                                          |
| ----------------------------------- | ------------------------------------------------- |
| `app/layout.js`                     | Gemensam layout (ram, header, footer, typsnitt)   |
| `app/page.js`                       | Startsidan                                        |
| `app/produkter/page.js`             | Alla produkter                                    |
| `app/produkter/[productId]/page.js` | Produktsida (genereras statiskt vid build)        |
| `app/privatimport/page.js`          | Instruktioner för privatimport                    |
| `app/restaurangkund/page.js`        | Information och kontakt för restauranger/barer    |
| `app/kontakt/page.js`               | Kontakt                                           |
| `components/`                       | `Header` (meny), `Card`, `OrderButton`, `PageHeading`, `ImageTextSection` |
| `lib/styles.js`                     | Gemensamma stilar: länkar, knappar och sidmarginaler |
| `app/icon.png`, `app/apple-icon.png` | Flikikon (favicon) och ikon för hemskärm        |
| `data/products.json`                | Produktdata — lägg till nya produkter här         |
| `lib/site.js`                       | Officiell adress (www.blomdellimport.se), namn, beskrivning och sociala länkar |
| `app/robots.js`, `app/sitemap.js`   | robots.txt och sitemap.xml (genereras automatiskt) |
| `assets/`                           | Bilder som importeras i koden (logga, utvalda)    |
| `public/`                           | Statiska filer, t.ex. `/products/*.png`           |

## Ny produkt

1. Lägg bilden i `public/products/`.
2. Lägg till ett objekt i `data/products.json` med `productId`, `imageSrc`, `brand`, `title`, `price`, `orderLink`, `outOfStock` (och ev. `collection`).

Sätt `"outOfStock": true` för att visa "Tillfälligt slut" och inaktivera beställknappen – på produktkortet, produktsidan och startsidan samtidigt.

Startsidans utvalda produkter väljs i `featured`-listan i `app/page.js` (productId + bild). Namn, pris och lagerstatus hämtas från `products.json`.

Produktsidan `/produkter/<productId>` skapas automatiskt vid nästa build.

För tequila anges även `"bottle"` (t.ex. `"Skelly"`) och `"tequilaType"` (`"Blanco"`, `"Reposado"` eller `"Añejo"`).
Produktsidan visar då rätt smakbeskrivning och fakta (från `lib/tequila.js`) och vilka andra
innehåll samma flaska finns med.

## Driftsättning på Vercel

1. Importera repot på [vercel.com/new](https://vercel.com/new).
2. Framework Preset blir automatiskt **Next.js** — klicka **Deploy**.


## Åldersfråga

Första besöket visas en fråga om besökaren har fyllt 25 år (`components/AgeGate.js`).
Svaret "Ja" sparas i webbläsaren, så frågan visas inte igen på samma enhet.
