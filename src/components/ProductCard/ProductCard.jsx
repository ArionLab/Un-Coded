function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.name}
        </h3>

        <p className="product-flavour">
          {product.flavor}
        </p>

        <div className="product-price">
          ₹{product.price}
        </div>

        <button className="primary-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;