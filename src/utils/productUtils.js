import { products } from "../data/products";

export const getFeaturedProducts = () =>

    products.filter(product => product.featured);

export const getProductBySlug = (slug) =>

    products.find(product => product.slug === slug);

export const getRelatedProducts = (category, slug) =>

    products
        .filter(product =>
            product.category === category &&
            product.slug !== slug
        )
        .slice(0,4);