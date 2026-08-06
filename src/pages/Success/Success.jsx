import "./Success.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Success() {
const navigate = useNavigate();

useEffect(() => {

    const timer = setTimeout(() => {

        navigate("/");

    }, 5000);

    return () => clearTimeout(timer);

}, [navigate]);
    return (

        <section className="success-page">

            <div className="container">

                <div className="success-card">

                    <div className="success-icon">

                        ✓

                    </div>

                    <h1>

                        Order Placed Successfully!

                    </h1>

                    <p>

                        Thank you for choosing Us.

                        Your order has been received and is being processed.

                    </p>

                    <Link

                        to="/products"

                        className="primary-btn"

                    >

                        You will be redirected to the Home page shortly

                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Success;