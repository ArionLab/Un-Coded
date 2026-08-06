import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Checkout from "./pages/Checkout/Checkout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Layout from "./components/Layout/Layout";
import Success from "./pages/Success/Success";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";

function App() {

  const location = useLocation();

  return (

    <Layout>

      <ScrollToTop />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<Cart />} />
          <Route

path="/checkout"

element={<Checkout />}

/>
<Route

path="/success"

element={<Success />}

/>
        </Routes>

      </AnimatePresence>

    </Layout>

  );

}

export default App;