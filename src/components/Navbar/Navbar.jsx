import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Elev8</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <NavLink to="/cart">
        <ShoppingCart size={22} />
      </NavLink>
    </nav>
  );
}

export default Navbar;