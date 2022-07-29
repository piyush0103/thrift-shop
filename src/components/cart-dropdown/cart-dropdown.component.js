import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { CartContext } from "../context/cartContext";
import CartItem from '../cart-item/cart-item.component'
import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  const { products, setProducts, isCartDropDownOpen, setIsCartDropDownOpen } =
    useContext(CartContext);
    console.log('printing from cart-dropdown',products,isCartDropDownOpen)

    const handleGoToCheckOut=()=>{
      
    }
  return (
    <div
      className="cart-dropdown-container"
    >
      <div className="cart-items">
        {products.map((product) => {
          return <CartItem key={product.id} cartItem={product}></CartItem>;
        })}
        <Link className="nav-links" to="/cart">
          <Button className={BUTTON_TYPE_CLASSES.inverted} onClick={handleGoToCheckOut}>
            Go To CheckOut
          </Button>
        </Link>
      </div>
    </div>
  );
}
