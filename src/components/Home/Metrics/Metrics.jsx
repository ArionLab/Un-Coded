import "./Metrics.css";
import Container from "../../Container/Container";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "24g",
    label: "Protein Per Serving",
  },
  {
    value: "5.4g",
    label: "Naturally Occurring BCAAs",
  },
  {
    value: "20+",
    label: "Premium Products",
  },
  {
    value: "100%",
    label: "Authentic Ingredients",
  },
];

function Metrics() {
  return (
    <section className="metrics">

      <Container>

        <div className="metrics-grid">

          {metrics.map((metric, index) => (

            <motion.div
              key={index}
              className="metric-card"
              whileHover={{ y: -6 }}
            >

              <h2>{metric.value}</h2>

              <p>{metric.label}</p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Metrics;