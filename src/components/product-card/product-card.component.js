import React, { useContext } from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import {addProductToCart} from '../../store/cart/cart-action'
import { CartContext } from "../context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
} from "../../store/cart/cart-selector";
export default function ProductCard({ item }) {
  const { id, name, imageUrl, price } = item;
  // const { products, addProductToCart } =
  // useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
const dispatch =useDispatch()
  const handleAddItemToCart=()=>{
 
dispatch(addProductToCart(cartItems,item))
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product-picture"></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} $</span>
      </div>
      <Button type="button" buttontype={BUTTON_TYPE_CLASSES.inverted}  onClick={handleAddItemToCart}>
        {" "}
        ADD to cart{" "}
      </Button>
    </div>
  );
}
