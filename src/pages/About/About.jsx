import "./About.css";
import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";

import {
    ShieldCheck,
    Dumbbell,
    Sparkles,
    HeartHandshake
} from "lucide-react";

function About() {

    return (

        <section className="about-page">

            <Container>

                {/* HERO */}

                <div className="about-hero">

                    <p className="section-label">

                        WHO WE ARE

                    </p>

                    <h1 className="section-title">

                        Elev8 Your Everyday
                        <span className="highlight">
                            {" "}Performance.
                        </span>

                    </h1>

                    <p className="section-subtitle">

                        At Elev8, we believe premium nutrition should be simple,
                        enjoyable and consistent. Every product is thoughtfully
                        crafted to deliver exceptional flavour, trusted quality
                        and a premium experience that fits effortlessly into your
                        everyday lifestyle.

                    </p>

                </div>

                {/* PHILOSOPHY */}

                <div className="about-story">

    <div>

        <p className="section-label">

            WHY WE STARTED

        </p>

        <h2 className="section-title">

            Every Great Product Begins With A Problem.

        </h2>

    </div>

    <div className="story-text">

        <p>

            The idea behind Elev8 didn't begin inside a laboratory.
            It started with a simple observation.

        </p>

        <p>

            People who genuinely wanted to live healthier lives were
            constantly forced to compromise. Products promising premium
            nutrition often sacrificed taste, while products that tasted
            great didn't always inspire confidence in their quality.
            Choosing the right nutrition became unnecessarily complicated.

        </p>

        <p>

            Elev8 was created to bridge that gap by combining thoughtfully
            selected ingredients, exceptional flavour and uncompromising
            quality into products people would genuinely enjoy every day.

        </p>

    </div>

</div>
                {/* FEATURES */}

                <div className="about-features">

                    <div className="feature-card">

                        <Dumbbell size={34} />

                        <h3>

                            Performance

                        </h3>

                        <p>

                            Nutrition designed for everyday consistency
                            and long-term performance.

                        </p>

                    </div>

                    <div className="feature-card">

                        <ShieldCheck size={34} />

                        <h3>

                            Quality

                        </h3>

                        <p>

                            Carefully selected ingredients and
                            uncompromising quality standards.

                        </p>

                    </div>

                    <div className="feature-card">

                        <Sparkles size={34} />

                        <h3>

                            Innovation

                        </h3>

                        <p>

                            Modern formulations paired with flavours
                            you'll genuinely enjoy.

                        </p>

                    </div>

                    <div className="feature-card">

                        <HeartHandshake size={34} />

                        <h3>

                            Trust

                        </h3>

                        <p>

                            Honest products designed to become
                            part of your everyday lifestyle.

                        </p>

                    </div>

                </div>
<div className="vision-card">

    <p className="section-label">

        WHAT DRIVES US

    </p>

    <div className="vision-divider"></div>

    <div className="vision-quote">

        “

    </div>

    <h2>

        To make premium

        <span className="highlight">

            {" "}performance nutrition{" "}

        </span>

        simple enough

        <br />

        for everyday life.

    </h2>

</div>
                {/* PROMISE */}

                <div className="promise-card">

    <p className="section-label">

        OUR PROMISE

    </p>

    <div className="promise-divider"></div>

    <h2>

        Innovation That

        <span className="highlight">

            {" "}Feels Effortless.

        </span>

    </h2>

    <p>

        Innovation isn't about adding complexity.

        It's about removing it.

        Every Elev8 product is designed to make premium nutrition simpler,
        more enjoyable and easier to choose. We obsess over the details so
        you can focus on your goals.

    </p>

    <div className="promise-values">

        <span>Premium Quality</span>

        <span>Exceptional Flavour</span>

        <span>Everyday Simplicity</span>

    </div>

</div>

                {/* CTA */}

                <div className="about-cta">

                    <h2>

                        Ready to Elev8 Your Performance?

                    </h2>

                    <p>

                        Explore premium nutrition built for everyday
                        performance.

                    </p>

                    <Link
                        to="/products"
                        className="primary-btn"
                    >

                        Explore Products

                    </Link>

                </div>

            </Container>

        </section>

    );

}

export default About;