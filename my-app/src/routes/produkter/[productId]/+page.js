import productsData from '$lib/data/products.json';

export async function load ({ params }) {
    const productId = params.productId;
    const product = productsData.products.find(p => p.id === productId);
    
    return {
        product
    };
}