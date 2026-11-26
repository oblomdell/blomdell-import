# Blomdell Import

Webbplats för Blomdell Import, byggd med [Next.js](https://nextjs.org) (App Router) och Tailwind CSS.
Publiceras via Vercel på https://www.blomdellimport.se.

## Kom igång

```bash
npm install
npm run dev
```

Öppna sedan [http://localhost:3000](http://localhost:3000).

## Struktur

| Sökväg | Innehåll |
| --- | --- |
| `app/layout.js` | Gemensam layout: ram, header, sidfot, typsnitt, åldersfråga, metadata |
| `app/page.js` | Startsidan (välkomsttext och utvalda produkter) |
| `app/produkter/page.js` | Alla produkter |
| `app/produkter/[productId]/page.js` | Produktsida (genereras statiskt vid build) |
| `app/privatimport/page.js` | Instruktioner för privatimport |
| `app/restaurangkund/page.js` | Information och kontakt för restauranger och barer |
| `app/kontakt/page.js` | Kontakt |
| `app/not-found.js` | 404-sida |
| `app/robots.js`, `app/sitemap.js`, `app/manifest.js` | robots.txt, sitemap.xml och webbappmanifest (genereras automatiskt) |
| `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` | Flikikon och ikon för hemskärm |
| `components/` | Byggstenar: `Header`, `Card`, `OrderButton`, `PageHeading`, `ImageTextSection`, `TequilaDetails`, `WineInfo`, `AgeGate`, `SocialLinks` m.fl. |
| `data/products.json` | Produktdata – priser, lagerstatus, länkar |
| `lib/products.js` | Hämta produkter, namn och prisformat |
| `lib/tequila.js` | Smakbeskrivningar och fakta för Blanco, Reposado, Añejo och flaskorna |
| `lib/wines.js` | Doft, smak och fakta för vinerna (nyckel = `productId`) |
| `lib/site.js` | Officiell adress, namn, beskrivning och sociala länkar |
| `lib/styles.js` | Gemensamma stilar: länkar, knappar och sidmarginaler |
| `assets/` | Bilder som importeras i koden: loggan (`logo-blue.jpeg` används, svarta `logo.jpeg` sparad), startsidans och sidornas bilder |
| `public/products/` | Produktbilder (`imageSrc` i `products.json`) |
| `public/coverphotos/` | Originalbilder, sparade för framtida bruk |

## Produkter

Ändra pris eller lagerstatus i `data/products.json`. Allt uppdateras automatiskt på
produktkortet, produktsidan och startsidan vid nästa publicering.

Sätt `"outOfStock": true` för att visa "Tillfälligt slut". Beställknappen blir då
"Fråga om tillgänglighet", som öppnar ett mejl med produktnamnet i ämnesraden.

### Ny produkt

1. Lägg bilden i `public/products/`.
2. Lägg till ett objekt i `data/products.json` med `productId`, `imageSrc`, `brand`, `category`
   (`"Vin"` eller `"Tequila"`), `title`, `price`, `orderLink`, `outOfStock` (och ev. `collection`).

Produktsidan `/produkter/<productId>` skapas automatiskt.

**Tequila** behöver även:
- `"bottle"` – flaskfamilj, t.ex. `"Skelly"`, `"Glas"`, `"Talavera"`, `"Barebone"`
- `"variant"` – texten på variantknappen, t.ex. `"Reposado"`, `"Añejo (guldflaska)"` eller `"Lila"`
- `"tequilaType"` – `"Blanco"`, `"Reposado"` eller `"Añejo"`

**Vin:** lägg till doft och smak, serveringsförslag och fakta i `lib/wines.js`.

Startsidans utvalda produkter väljs i `featured`-listan i `app/page.js` (productId + bild).

## Åldersfråga

Vid första besöket visas en fråga om besökaren har fyllt 25 år (`components/AgeGate.js`).
Svaret "Ja" sparas i webbläsaren, så frågan visas inte igen på samma enhet.

## Grenar och publicering

- `design` – här testas ändringar (egen förhandsvisningslänk på Vercel)
- `dev` – godkända ändringar
- `main` – den publika sajten; varje push publiceras automatiskt av Vercel
