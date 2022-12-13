import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useCartContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Ecommerce</Link>
      </p>
      <button
        className="cart-icon"
        type="button"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
