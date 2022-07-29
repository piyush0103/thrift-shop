import React, { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../context/cartContext";
export default function CartIcon({}) {
  const { products, setProducts, isCartDropDownOpen, setIsCartDropDownOpen } =
    useContext(CartContext);
  const [cartToggle, setCartToggle] = useState(false);
  const handleCartDropDowntoggle = (e) => {
    console.log("it is coming here", e.type);
    if (e.type == "mouseover") {
      setCartToggle(true);
      setIsCartDropDownOpen(cartToggle);
    } else {
      setIsCartDropDownOpen(false);
    }
  }

  return (
    <div
      className="cart-icon-container"
      onMouseOver={handleCartDropDowntoggle}
      onMouseOut={handleCartDropDowntoggle}
    >
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{products.length} </span>
    </div>
  );
}
