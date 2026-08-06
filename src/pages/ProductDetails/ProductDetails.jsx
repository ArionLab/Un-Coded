import { reviews } from "../../data/reviews";
import "./ProductDetails.css";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
    getProductBySlug,
    getRelatedProducts
} from "../../utils/productUtils";

function ProductDetails() {

    const { slug } = useParams();

    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    const product = getProductBySlug(slug);

    if (!product) {

        return (

            <section className="product-details-page">

                <h1>Product Not Found</h1>

            </section>

        );

    }

    const relatedProducts = getRelatedProducts(

        product.category,

        product.slug

    );
    const productReviews = reviews[product.slug] || [];

    return (

        <section className="product-details-page">

            <div className="product-details-container">

                <div className="product-image-section">

                    <img
    src={product.image}
    alt={product.name}
    className="details-image"
    width="600"
    height="600"
    loading="eager"
    decoding="async"
/>
                </div>

                <div className="product-info-section">

                    <span className="product-category">

                        {product.category}

                    </span>

                    <h1 className="details-title">

                        {product.name}

                    </h1>

                    <div className="details-rating">

                        ⭐ {product.rating}

                        <span>

                            ({product.reviews} Reviews)

                        </span>

                    </div>

                    <div className="details-price">

                        ₹{product.price}

                    </div>

                    <p className="details-description">

                        {product.description}

                    </p>
                    <div className="nutrition-card">

    <div className="nutrition-row">

        <span>Protein</span>

        <strong>{product.protein}</strong>

    </div>

    <div className="nutrition-row">

        <span>Calories</span>

        <strong>{product.calories}</strong>

    </div>

    <div className="nutrition-row">

        <span>Weight</span>

        <strong>{product.weight}</strong>

    </div>

    <div className="nutrition-row">

        <span>Servings</span>

        <strong>{product.servings}</strong>

    </div>

</div>
<div className="quantity-selector">

    <button

        onClick={() =>
            quantity > 1 &&
            setQuantity(quantity - 1)
        }

    >

        −

    </button>

    <span>

        {quantity}

    </span>

    <button

        onClick={() =>
            setQuantity(quantity + 1)
        }

    >

        +

    </button>

</div>
<button

className="details-cart-btn"

onClick={()=>

addToCart(

product,

quantity

)

}

>

Add {quantity} to Cart

</button>

                </div>

            </div>
<div className="related-products">

    <h2 className="related-title">

        You May Also Like

    </h2>

    <ProductGrid

        products={relatedProducts}

    />

</div>
<div className="reviews-section">

    <h2 className="related-title">

        Customer Reviews

    </h2>

    {

        productReviews.length > 0 ? (

            productReviews.map((review) => (

                <div
                    className="review-card"
                    key={review.id}
                >

                    <div className="review-header">

                        <strong className="review-name">

    {review.name}

</strong>

                        <span className="review-stars">

    {"⭐".repeat(review.rating)}

</span>

                    </div>

                    <p>

                        {review.comment}

                    </p>

                </div>

            ))

        ) : (

            <p className="no-reviews">

                No reviews yet.

            </p>

        )

    }

</div>
        </section>

    );

}

export default ProductDetails;