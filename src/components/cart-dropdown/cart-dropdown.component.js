import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { CartContext } from "../context/cartContext";
import CartItem from '../cart-item/cart-item.component'
import "./cart-dropdown.styles.scss";
import {CartDropdownContainer,CartItemContainer,EmptyMessage} from "./cart-dropdown.styles"

export default function CartDropdown() {
  const { products, setProducts, isCartDropDownOpen, setIsCartDropDownOpen } =
    useContext(CartContext);
    console.log('printing from cart-dropdown',products,isCartDropDownOpen)

    const handleGoToCheckOut=()=>{
      
    }
  return (
  //   <div
  //     className="cart-dropdown-container"
  //   >
  //     <div className="cart-items">
  //       {
        
  //       products.length ? products.map((product) => {
  //         return <CartItem key={product.id} cartItem={product}></CartItem>;
  //       }):(<span>Your cart is Empty</span>)
  //     }
  //       <Link className="nav-links" to="/cart">
  //         <Button className={BUTTON_TYPE_CLASSES.inverted} onClick={handleGoToCheckOut}>
  //           Go To CheckOut
  //         </Button>
  //       </Link>
  //     </div>
  //   </div>
  // );

<CartDropdownContainer
      
    >
      <CartItemContainer >
        {
        
        products.length ? products.map((product) => {
          return <CartItem key={product.id} cartItem={product}></CartItem>;
        }):(<EmptyMessage>Your cart is Empty</EmptyMessage>)
      }
        <Link className="nav-links" to="/cart">
          <Button className={BUTTON_TYPE_CLASSES.inverted} onClick={handleGoToCheckOut}>
            Go To CheckOut
          </Button>
        </Link>
      </CartItemContainer>
    </CartDropdownContainer>
  );

}
