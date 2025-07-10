import { ShoppingCart, User } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cart/CartContext";

const linkBaseClass =
  "transition-all duration-300 text-white hover:text-secondary relative";
const contactBtnClass =
  "px-6 py-2 bg-secondary text-primary rounded-full font-bold hover:scale-90 transition-transform duration-300";

export default function SecondaryMenu() {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex items-center gap-8">
      <NavLink to="/cart" className={linkBaseClass} aria-label="Shopping Cart">
        <ShoppingCart size={30} />
        <span className="absolute -top-4 -right-3 font-bold">
          {cart.length}
        </span>
      </NavLink>
      <NavLink to="/" className={linkBaseClass} aria-label="User Profile" end>
        <User size={30} />
      </NavLink>
      <NavLink to="/contact" className={contactBtnClass}>
        Contact Us
      </NavLink>
    </div>
  );
}
