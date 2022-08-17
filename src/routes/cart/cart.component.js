import React, { useContext } from "react";
import ShoppingCart from "../../components/Shopping-bag/shopping-cart.component";
import { CartContext } from "../../components/context/cartContext";
import './cart.styles.scss'
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems
} from "../../store/cart/cart-selector";
const Cart = () => {
//   const {cartItems} =
// useContext(CartContext);
const cartItems = useSelector(selectCartItems);  

console.log("printing inside cart compo ",cartItems)

 
  return (
    <div className="checkout-container">
<div className="checkout-header">
<h3>product</h3>
<h3>description</h3>
<h3>quantity</h3>
<h3>price</h3>
<div className="header-block">
  <h3>ReMove</h3>
</div>
</div>

      {cartItems.length &&cartItems.map((product) => {
        console.log("printing inside cart compo ",product)
        return (
          <ShoppingCart key={product.id} orderItem={product}></ShoppingCart>
        );
      })}
    </div>
  );
};

export default Cart;
