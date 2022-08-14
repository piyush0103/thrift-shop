import React, { useContext } from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import { CartContext } from "../context/cartContext";
export default function ProductCard({ item }) {
  const { id, name, imageUrl, price } = item;
  const { products, addProductToCart } =
  useContext(CartContext);
  const handleAddItemToCart=()=>{
 
addProductToCart(item)
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
