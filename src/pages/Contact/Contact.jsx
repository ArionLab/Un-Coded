import "./Contact.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Container from "../../components/Container/Container";

import {
    Mail,
    Phone,
    MapPin,
    Clock
} from "lucide-react";

function Contact() {
const navigate = useNavigate();
    const [form, setForm] = useState({

        name: "",

        email: "",

        subject: "",

        message: ""

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e){

        e.preventDefault();

        toast.success("Message sent successfully!");

        setForm({

            name: "",

            email: "",

            subject: "",

            message: ""

        });

    }

    return(

        <section className="contact-page">

            <Container>

                <div className="contact-hero">

                    <p className="section-label">

                        GET IN TOUCH

                    </p>

                    <h1 className="section-title">

                        We'd Love To Hear From You

                    </h1>

                    <p className="section-subtitle">

                        Have a question about our products or simply want to
                        connect? Our team is always happy to help.

                    </p>

                </div>

                <div className="contact-info">

    <div className="info-card">

        <Mail size={28}/>

        <h3>Email</h3>

        <p>

            support@elev8nutrition.com

        </p>

    </div>

    <div className="info-card">

        <Phone size={28}/>

        <h3>Phone</h3>

        <p>

            +91 98765 43210

        </p>

    </div>

    <div className="info-card">

        <MapPin size={28}/>

        <h3>Location</h3>

        <p>

            Mumbai, Maharashtra

        </p>

    </div>

    <div className="info-card">

        <Clock size={28}/>

        <h3>Working Hours</h3>

        <p>

            Mon – Sat

            <br/>

            9:00 AM – 6:00 PM

        </p>

    </div>

</div>

<form

    className="contact-form"

    onSubmit={handleSubmit}

>
  <h2>

    Send Us A Message

</h2>

<p className="form-subtitle">

    We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.

</p>

    <div className="input-row">

    <input

        type="text"

        placeholder="Full Name"

        name="name"

        value={form.name}

        onChange={handleChange}

        required

    />

    <input

        type="email"

        placeholder="Email Address"

        name="email"

        value={form.email}

        onChange={handleChange}

        required

    />

</div>

    <input

        type="text"

        placeholder="Subject"

        name="subject"

        value={form.subject}

        onChange={handleChange}

        required

    />

    <textarea

        rows="6"

        placeholder="Your Message"

        name="message"

        value={form.message}

        onChange={handleChange}

        required

    />

    <button

        className="primary-btn"

        type="submit"

    >

        Send Message

    </button>

</form>

                <div className="contact-cta">

                    <p className="section-label">

                        STILL HAVE QUESTIONS?

                    </p>

                    <h2>

                        Visit Our FAQ Section

                    </h2>

                    <p>

                        You might find your answer even faster in our
                        Frequently Asked Questions.

                    </p>

                  <button
    className="primary-btn"
    onClick={() =>
        navigate("/", {
            state: {
                scrollTo: "faq"
            }
        })
    }
>

    Browse FAQs

</button>

                      

                </div>

            </Container>

        </section>

    );

}

export default Contact;