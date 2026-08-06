import "./FeaturedProducts.css";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../Container/Container";
import ProductCard from "../../ProductCard/ProductCard";
import { products } from "../../../data/products";

const categories = [
  { label: "Whey", value: "whey" },
  { label: "Bars", value: "bars" },
  { label: "Chips", value: "chips" },
];

const PRODUCTS_PER_PAGE = 3;

function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("whey");
  const [currentPage, setCurrentPage] = useState(0);

  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.category?.toLowerCase() === activeCategory
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(
    categoryProducts.length / PRODUCTS_PER_PAGE
  );

  const visibleProducts = categoryProducts.slice(
    currentPage * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  const previousPage = () => {
    setCurrentPage((page) =>
      page === 0 ? totalPages - 1 : page - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((page) =>
      page === totalPages - 1 ? 0 : page + 1
    );
  };

  return (
    <section className="featured-products">

      <Container>

        <div className="featured-header">

          <div className="featured-heading">

            <p className="section-label">
              FEATURED PRODUCTS
            </p>

            <h2 className="section-title">
              The Best in Performance Nutrition
            </h2>

            <p className="section-subtitle">
              Discover our best-selling whey protein,
              protein bars and protein chips built for
              performance without compromising taste.
            </p>

          </div>

          <Link
            to="/products"
            className="featured-view-all"
          >
            View All Products
          </Link>

        </div>


        <div className="featured-controls">

          <div className="category-tabs">

            {categories.map((category) => (

              <button
                key={category.value}
                type="button"
                className={
                  activeCategory === category.value
                    ? "category-tab active"
                    : "category-tab"
                }
                onClick={() =>
                  setActiveCategory(category.value)
                }
              >
                {category.label}
              </button>

            ))}

          </div>


          {totalPages > 1 && (

            <div className="carousel-arrows">

              <button
                type="button"
                onClick={previousPage}
                aria-label="Previous products"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={nextPage}
                aria-label="Next products"
              >
                <ChevronRight size={22} />
              </button>

            </div>

          )}

        </div>


        <div className="featured-carousel">

          <div
            className="featured-product-grid"
            key={`${activeCategory}-${currentPage}`}
          >

            {visibleProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>


        {totalPages > 1 && (

          <div className="carousel-pagination">

            {Array.from({ length: totalPages }).map(
              (_, index) => (

                <button
                  key={index}
                  type="button"
                  aria-label={`Go to product page ${index + 1}`}
                  className={
                    currentPage === index
                      ? "pagination-dot active"
                      : "pagination-dot"
                  }
                  onClick={() =>
                    setCurrentPage(index)
                  }
                />

              )
            )}

          </div>

        )}

      </Container>

    </section>
  );
}

export default FeaturedProducts;