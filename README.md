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
| `components/`                       | `Header` (navigering/mobilmeny) och `Card`        |
| `data/products.json`                | Produktdata — lägg till nya produkter här         |
| `assets/`                           | Bilder som importeras i koden (logga, utvalda)    |
| `public/`                           | Statiska filer, t.ex. `/products/*.png`           |

## Ny produkt

1. Lägg bilden i `public/products/`.
2. Lägg till ett objekt i `data/products.json` med `productId`, `imageSrc`, `brand`, `title`, `price`, `orderLink` (och ev. `collection`).

Produktsidan `/produkter/<productId>` skapas automatiskt vid nästa build.

## Driftsättning på Vercel

1. Importera repot på [vercel.com/new](https://vercel.com/new).
2. Framework Preset blir automatiskt **Next.js** — klicka **Deploy**.
