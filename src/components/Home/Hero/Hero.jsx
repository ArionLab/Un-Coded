
import cookiesWhey from "../../../assets/products/whey/cookies-creme.webp";

import blueberryBar from "../../../assets/products/bars/blueberry.webp";

import creamOnionChips from "../../../assets/products/chips/cream-onion.webp";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Container from "../../Container/Container";

function Hero() {
  const heroProducts = [




    {
        image: cookiesWhey,
        title: "Recover Better.",
        subtitle: "Smooth, creamy whey that helps your muscles recover after every workout."
    },

    {
        image: blueberryBar,
        title: "Snack With Purpose.",
        subtitle: "The perfect balance of taste, protein and convenience for busy lifestyles."
    },

    {
        image: creamOnionChips,
        title: "Healthy Can Be Delicious.",
        subtitle: "Every bite delivers flavour, crunch and the protein your body deserves."
    }

];
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {

    const interval = setInterval(() => {

        setCurrentImage((prev) => {

            const next = (prev + 1) % heroProducts.length;
            console.log("Changing to:", next);
            return next;

        });

    }, 4000);

    return () => clearInterval(interval);

}, [heroProducts.length]);
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

           <motion.span

    className="hero-tag"

    key={heroProducts[currentImage].title}

    initial={{

        opacity:0,

        y:-8

    }}

    animate={{

        opacity:1,

        y:0

    }}

    transition={{

        duration:.35

    }}

>

    {

        currentImage === 0 ||

        currentImage === 3

            ? "PREMIUM WHEY"

            : currentImage === 1 ||

              currentImage === 4

            ? "PROTEIN BARS"

            : "PROTEIN CHIPS"

    }

</motion.span>
          <motion.h1

    key={currentImage}

    initial={{

        opacity:0,

        y:20

    }}

    animate={{

        opacity:1,

        y:0

    }}

    transition={{

        duration:.5

    }}

>

    {heroProducts[currentImage].title}

</motion.h1>

            <motion.p

    key={heroProducts[currentImage].subtitle}

    initial={{

        opacity:0,

        y:15

    }}

    animate={{

        opacity:1,

        y:0

    }}

    transition={{

        duration:.6

    }}

>

    {heroProducts[currentImage].subtitle}

</motion.p>

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

      <motion.img

    key={heroProducts[currentImage].image}

    src={heroProducts[currentImage].image}

    alt={heroProducts[currentImage].title}

    width="500"

    height="500"

    fetchPriority="high"

    loading="eager"

    decoding="async"

    initial={{

        opacity:0,

        scale:.92,

        rotate:-3

    }}

    animate={{

        opacity:1,

        scale:1,

        rotate:0

    }}

    transition={{

        duration:.7

    }}

/>
          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;