import "./Navbar.css";
import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import logo from "../../assets/logo/logo.webp";

function Navbar() {
  const { cartCount } = useCart();
  return (

    <header className="navbar">

      <NavLink
        to="/"
        className="navbar-logo"
      >
<img
    src={logo}
    alt="Elev8 Logo"
    width="140"
    height="75"
    loading="eager"
    decoding="async"
/>

      </NavLink>

      <nav className="navbar-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </nav>

  <NavLink
  to="/cart"
  className="cart-button"
>

  <div className="cart-icon">

    <ShoppingCart size={20} />

    {cartCount > 0 && (

      <span className="cart-count">

        {cartCount}

      </span>

    )}

  </div>

</NavLink>

    </header>

  );

}

export default Navbar;