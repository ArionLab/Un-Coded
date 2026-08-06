import "./FAQ.css";

import { useState } from "react";

import Container from "../../Container/Container";

import { ChevronDown } from "lucide-react";

import { faqs } from "../../../data/faqs";

function FAQ(){

    const [active,setActive]=useState(null);

    return(

     <section className="faq">

            <Container>

                <div className="section-heading">

                    <p className="section-label">

                        FAQ

                    </p>

                    <h2 className="section-title">

                        Frequently Asked Questions

                    </h2>

                    <p className="section-subtitle">

                        Everything you need to know before choosing Elev8.

                    </p>

                </div>

                <div className="faq-list">

                    {

                        faqs.map((item)=>(

                            <div
                                key={item.id}
                                className={
                                    active===item.id
                                    ?
                                    "faq-item active"
                                    :
                                    "faq-item"
                                }
                            >

                                <button

                                    className="faq-question"

                                    onClick={()=>{

                                        if(active===item.id){

                                            setActive(null);

                                        }

                                        else{

                                            setActive(item.id);

                                        }

                                    }}

                                >

                                    <span>

                                        {item.question}

                                    </span>

                                    <ChevronDown/>

                                </button>

                                {

                                    active===item.id && (

                                        <div className="faq-answer">

                                            {item.answer}

                                        </div>

                                    )

                                }

                            </div>

                        ))

                    }

                </div>

            </Container>

        </section>

    );

}

export default FAQ;