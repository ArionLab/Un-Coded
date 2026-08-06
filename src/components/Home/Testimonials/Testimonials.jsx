import "./Testimonials.css";

import Container from "../../Container/Container";

import { testimonials } from "../../../data/testimonials";

import { Star } from "lucide-react";

function Testimonials(){

    return(

        <section className="testimonials">

            <Container>

                <div className="section-heading">

                    <p className="section-label">

                        TESTIMONIALS

                    </p>

                    <h2 className="section-title">

                        Loved by Fitness Enthusiasts

                    </h2>

                    <p className="section-subtitle">

                        Real feedback from customers who trust Elev8 to fuel their fitness journey.

                    </p>

                </div>

                <div className="testimonial-grid">

                    {

                        testimonials.map((item)=>(

                            <div
                                key={item.id}
                                className="testimonial-card"
                            >

                                <div className="stars">

                                    {

                                        [...Array(item.rating)].map((_,index)=>(

                                            <Star
                                                key={index}
                                                size={18}
                                                fill="#C7F36B"
                                                color="#C7F36B"
                                            />

                                        ))

                                    }

                                </div>

                                <p className="testimonial-review">

                                    "{item.review}"

                                </p>

                                <div className="testimonial-user">

                                    <h4>

                                        {item.name}

                                    </h4>

                                    <span>

                                        {item.location}

                                    </span>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </Container>

        </section>

    );

}

export default Testimonials;