import products from '$lib/data/products.json';

export function load({ params }) {
    const { productId } = params;
    const product = products.find(p => p.productId === productId);

    if (!product) {
        return {
            status: 404,
            error: new Error('Product not found')
        };
    }

    return {
        product
    };
}