import Container from "../../Container/Container";
import ProductGrid from "../../ProductGrid/ProductGrid";

function FeaturedProducts() {
  return (
    <section>

      <Container>

        <p className="section-label">

FEATURED PRODUCTS

</p>

<h2 className="section-title">

Featured Products

</h2>

        <p className="section-subtitle">
          Performance nutrition engineered for athletes, fitness enthusiasts and anyone serious about better nutrition.
        </p>

        <ProductGrid/>

      </Container>

    </section>
  );
}

export default FeaturedProducts;