import products from "@/data/products.json";

/** Alla produkter i den ordning de står i data/products.json. */
export function getProducts() {
    return products;
}

/** En produkt via dess productId, eller undefined om den inte finns. */
export function getProduct(productId) {
    return products.find((p) => p.productId === productId);
}

/** Andra produkter av samma märke – för "Fler från …" på produktsidan. */
export function getRelatedProducts(product, limit = 4) {
    return products
        .filter((p) => p.brand === product.brand && p.productId !== product.productId)
        .slice(0, limit);
}

/** Fullständigt namn, t.ex. "Duc de Foix Merlot Barrica" eller "Skelly Añejo". */
export function productName(product) {
    return product.collection ? `${product.collection} ${product.title}` : product.title;
}

const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
});

/** Pris med svensk formatering, t.ex. "1 799 kr". */
export function formatPrice(price) {
    return priceFormatter.format(price);
}
