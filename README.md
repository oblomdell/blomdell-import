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
| `app/kontakt/page.js`               | Kontakt                                           |
| `components/`                       | `Header` (meny), `Card`, `OrderButton`            |
| `app/icon.png`, `app/apple-icon.png` | Flikikon (favicon) och ikon för hemskärm        |
| `data/products.json`                | Produktdata — lägg till nya produkter här         |
| `lib/site.js`                       | Officiell adress (www.blomdellimport.se), namn, beskrivning och sociala länkar |
| `lib/instagram.js`                  | Hämtar Instagram-flödet (kräver `INSTAGRAM_ACCESS_TOKEN`) |
| `app/robots.js`, `app/sitemap.js`   | robots.txt och sitemap.xml (genereras automatiskt) |
| `assets/`                           | Bilder som importeras i koden (logga, utvalda)    |
| `public/`                           | Statiska filer, t.ex. `/products/*.png`           |

## Ny produkt

1. Lägg bilden i `public/products/`.
2. Lägg till ett objekt i `data/products.json` med `productId`, `imageSrc`, `brand`, `title`, `price`, `orderLink`, `outOfStock` (och ev. `collection`).

Sätt `"outOfStock": true` för att visa "Tillfälligt slut" och inaktivera beställknappen – på produktkortet, produktsidan och startsidan samtidigt.

Startsidans utvalda produkter väljs i `featured`-listan i `app/page.js` (productId + bild). Namn, pris och lagerstatus hämtas från `products.json`.

Produktsidan `/produkter/<productId>` skapas automatiskt vid nästa build.

## Driftsättning på Vercel

1. Importera repot på [vercel.com/new](https://vercel.com/new).
2. Framework Preset blir automatiskt **Next.js** — klicka **Deploy**.

## Instagram-flöde

Startsidan visar de senaste inläggen från @blomdellimport. Flödet hämtas via
Instagrams officiella API och uppdateras automatiskt en gång i timmen. Utan
nyckel visas bara rubriken med en länk till Instagram-kontot.

1. Gör Instagram-kontot till ett **företags-** eller **kreatörskonto** (i Instagram-appen).
2. Skapa en app på [developers.facebook.com](https://developers.facebook.com/apps/) och lägg till
   produkten **Instagram** → *API setup with Instagram login*.
3. Lägg till kontot, generera en **access token** och kopiera den.
4. I Vercel: **Settings → Environment Variables** → lägg till `INSTAGRAM_ACCESS_TOKEN`
   (miljö *Production*, och *Preview* om flödet ska synas i förhandsvisningar) → **Redeploy**.

Nyckeln gäller i 60 dagar och behöver förnyas innan den går ut.
