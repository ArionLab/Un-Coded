import Hero from "../../components/Home/Hero/Hero";
import Metrics from "../../components/Home/Metrics/Metrics";
import FeaturedProducts from "../../components/Home/FeaturedProducts/FeaturedProducts";
import Science from "../../components/Home/Science/Science";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FAQ from "../../components/Home/FAQ/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <FeaturedProducts />
      <Science />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;