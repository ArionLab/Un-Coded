import "./Science.css";

import Container from "../../Container/Container";

import { science } from "../../../data/science";

function Science(){

    return(

        <section className="science">

            <Container>

                <div className="section-heading">

                    <p className="section-label">

                        WHY ELEV8

                    </p>

                    <h2 className="section-title">

                        Built Around Performance

                    </h2>

                    <p className="section-subtitle">

                        Every Elev8 product is created with one goal in mind —
                        delivering premium nutrition without compromising taste or quality.

                    </p>

                </div>

                <div className="science-grid">

                    {

                        science.map((item)=>{

                            const Icon=item.icon;

                            return(

                                <div
                                    key={item.id}
                                    className="science-card"
                                >

                                    <Icon
                                        size={42}
                                        className="science-icon"
                                    />

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <p>

                                        {item.description}

                                    </p>

                                </div>

                            );

                        })

                    }

                </div>

            </Container>

        </section>

    );

}

export default Science;