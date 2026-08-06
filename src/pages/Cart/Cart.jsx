import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {

    const {

cartItems,

cartTotal,

increaseQuantity,

decreaseQuantity,

removeFromCart

}=useCart();

    return (

        <section className="cart-page">

            <div className="container">

                <h1 className="section-title">

                    Shopping Cart

                </h1>

                {

                    cartItems.length === 0 ? (

                        <div className="empty-cart">

                            <h2>Your cart is empty.</h2>

                            <p>

                                Start adding some products!

                            </p>

                        </div>

                    ) : (

                        <>
<div className="cart-items">

    {cartItems.map((item) => (

        <div
            className="cart-item"
            key={item.id}
        >

            <img
                src={item.image}
                alt={item.name}
                className="cart-image"
            />

            <div className="cart-info">

                <span className="cart-category">
                    {item.category}
                </span>

                <h3>
                    {item.name}
                </h3>

                <p>
                    {item.flavor}
                </p>

            </div>

          <div className="cart-actions">

    <div className="cart-quantity">

        <button

            onClick={()=>

                decreaseQuantity(item.id)

            }

        >

            −

        </button>

        <span>

            {item.quantity}

        </span>

        <button

            onClick={()=>

                increaseQuantity(item.id)

            }

        >

            +

        </button>

    </div>

    <div className="cart-price">

        ₹{item.price*item.quantity}

    </div>

    <button

        className="remove-btn"

        onClick={()=>

            removeFromCart(item.id)

        }

    >

        Remove

    </button>

</div>

        </div>

    ))}

</div>

                            <div className="cart-summary">

                                <h2>Order Summary</h2>

                                <div className="summary-row">

                                    <span>Total</span>

                                    <strong>

                                        ₹{cartTotal}

                                    </strong>

                                </div>

                               <Link

to="/checkout"

className="primary-btn"

>

Proceed to Checkout

</Link>

                            </div>

                        </>

                    )

                }

            </div>

        </section>

    );

}

export default Cart;