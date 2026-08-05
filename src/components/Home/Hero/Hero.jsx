import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroProduct from "../../../assets/hero/hero-product.png";
import Container from "../../Container/Container";

function Hero() {
  return (
    <section className="hero">

      <Container>

        <div className="hero-grid">

          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="hero-tag">
              PERFORMANCE NUTRITION
            </span>

            <h1>
              Protein,
              <br />
              Measured.
            </h1>

            <p>
              Premium whey protein, protein bars and protein chips engineered
              for performance without compromising taste.
            </p>

            <div className="hero-buttons">

              <Link to="/products">

                <button className="primary-btn">
                  Shop Now
                </button>

              </Link>

              <Link to="/about">

                <button className="secondary-btn">
                  Learn More
                </button>

              </Link>

            </div>

          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src={heroProduct}
              alt="Elev8 Protein"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;