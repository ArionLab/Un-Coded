import "./Success.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Success() {
const navigate = useNavigate();

useEffect(() => {

    const timer = setTimeout(() => {

        navigate("/");

    }, 3500);

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

                        Thank you for choosing us.

                        Your order has been received and is being processed.

                    </p>

                    <p className="redirect-text">

    You will be automatically redirected to the home page in 3 seconds.

</p>

<Link

    to="/"

    className="primary-btn"

>

    Return to Home

</Link>
                </div>

            </div>

        </section>

    );

}

export default Success;