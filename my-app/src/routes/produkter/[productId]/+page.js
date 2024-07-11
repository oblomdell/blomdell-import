import products from '$lib/data/products.json';

export function load({ params }) {
    const { productId } = params;
    const product = products.find(p => p.productId === productId);

    return {
        product
    };
}