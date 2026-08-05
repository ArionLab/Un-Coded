import ProductCard from "../ProductCard/ProductCard";
import { getFeaturedProducts } from "../../utils/productUtils";

function ProductGrid() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="product-grid">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;