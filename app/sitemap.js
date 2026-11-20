import products from "@/data/products.json";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
    const pages = ["/", "/produkter/", "/privatimport/", "/kontakt/"];

    return [
        ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
        ...products.map((product) => ({
            url: `${SITE_URL}/produkter/${product.productId}/`,
        })),
    ];
}
