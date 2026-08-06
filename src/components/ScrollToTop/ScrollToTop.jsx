import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {

    const location = useLocation();

    useEffect(() => {

        if (location.state?.scrollTo === "faq") {

            setTimeout(() => {

                document
                    .getElementById("faq")
                    ?.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

            }, 150);

            return;

        }

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, [location]);

    return null;

}

export default ScrollToTop;