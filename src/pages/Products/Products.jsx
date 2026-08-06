import { useState } from "react";

import "./Products.css";

import Container from "../../components/Container/Container";
import ProductsToolbar from "../../components/Products/ProductsToolbar/ProductsToolbar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import { products } from "../../data/products";

function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
const filteredProducts = products.filter((products) => {

    const matchesSearch =

        products.name.toLowerCase().includes(search.toLowerCase()) ||

        products.flavor.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =

        category === "All" ||

        products.category === category;

    return matchesSearch && matchesCategory;

}); 
  return (

    <section className="products-page">

      <Container>

        <div className="products-hero">

          <p className="section-label">
            SHOP
          </p>

          <h1 className="section-title">
            Search. Select.
            <span className="highlight"> Elev8.</span>
          </h1>

          <p className="section-subtitle">
            Discover the best in performance nutrition with our range of whey
            protein, protein bars and protein chips.
          </p>

          <ProductsToolbar
    search={search}
    setSearch={setSearch}
    category={category}
    setCategory={setCategory}
/>
        </div>

        <div className="products-grid-section">

          <p className="results-count">
            Showing {filteredProducts.length} Products
          </p>
        
          <ProductGrid
            products={filteredProducts}
          />

        </div>

      </Container>

    </section>

  );

}

export default Products;