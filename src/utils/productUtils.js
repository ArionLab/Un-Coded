import { products } from "../data/products";

export const getAllProducts = () => products;

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

export const getProductsByCategory = (category) =>
  products.filter((product) => product.category === category);

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);