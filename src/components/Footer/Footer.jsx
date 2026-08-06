import "./Footer.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../assets/logo/logo.webp";
function Footer() {

    return (

<footer className="footer">

    <Container>

        <div className="footer-top">

          <img
    src={logo}
    alt="Elev8 Logo"
    className="footer-logo"
    width="140"
    height="75"
    loading="lazy"
    decoding="async"
/>

            <p className="footer-tagline">

                Premium performance nutrition crafted for everyday life.

            </p>

        </div>

        <div className="footer-links">

            <div>

                <h3>

                    Shop

                </h3>

                <a href="/products">

                    All Products

                </a>

                <a href="/products">

                    Whey

                </a>

                <a href="/products">

                    Bars

                </a>

                <a href="/products">

                    Chips

                </a>

            </div>

            <div>

                <h3>

                    Company

                </h3>

                <a href="/about">

                    About Us

                </a>

                <a href="/contact">

                    Contact

                </a>

            </div>

            <div>

                <h3>

                    Support

                </h3>

                <a href="/contact">

                    Help Centre

                </a>

                <a href="/#faq">

                    FAQ

                </a>

            </div>

        </div>

        <div className="footer-bottom">

    <p>

        © 2026 Elev8 Nutrition

    </p>

    <span>

        Crafted with purpose.

    </span>

</div>
    </Container>

</footer>
    );
}
export default Footer;