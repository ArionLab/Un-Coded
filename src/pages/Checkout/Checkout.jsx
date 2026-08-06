import "./Checkout.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Checkout() {

    const navigate = useNavigate();

   const {

    cartItems,

    cartTotal,

    clearCart

}=useCart();

    const [form,setForm]=useState({

        name:"",

        email:"",

        phone:"",

        address:"",

        city:"",

        state:"",

        pincode:""

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }

    function placeOrder(e){

    if (e) {

        e.preventDefault();

    }

    clearCart();

    navigate("/success");

}

    return(

        <section className="checkout-page">

            <div className="container checkout-layout">

                <form

                    className="checkout-form"

                    onSubmit={placeOrder}

                >

                    <h2>

                        Shipping Details

                    </h2>

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        rows="4"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="pincode"
                        placeholder="Pincode"
                        onChange={handleChange}
                        required
                    />

                    <div className="success-actions">

    <Link

        to="/products"

        className="primary-btn"

    >

        Continue Shopping

    </Link>

    <Link

        to="/"

        className="secondary-btn"

    >

        Back to Home

    </Link>

</div>

                </form>

                <div className="checkout-summary">

                    <h2>

                        Order Summary

                    </h2>

                    {

                        cartItems.map(item=>(

                            <div

                                className="checkout-item"

                                key={item.id}

                            >

                                <span>

                                    {item.name}

                                    ×

                                    {item.quantity}

                                </span>

                                <strong>

                                    ₹{item.price*item.quantity}

                                </strong>

                            </div>

                        ))

                    }

                    <div className="checkout-total">

                        <span>Total</span>

                        <strong>

                            ₹{cartTotal}

                        </strong>

                    </div>
                    <button

    className="primary-btn"

    onClick={placeOrder}

>

    Buy Now

</button>

                </div>

            </div>

        </section>

    );

}

export default Checkout;