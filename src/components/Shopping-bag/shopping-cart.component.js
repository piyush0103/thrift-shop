import "./shopping-cart.styles.scss";
import { CartContext } from "../../components/context/cartContext";
import { useContext } from "react";
export default function ShoppingCart({ orderItem }) {
  const {
    addProductToCart,
    deleteProductFromCart,
    cartTotal,
    removeProductFromCart,
  } = useContext(CartContext);
  const { id, name, imageUrl, price, quantity } = orderItem;
  return (
    <div className="shopping-cart-container">
      <div className="item-container">
        <img src={imageUrl} alt="" />
        <div className="item-details">
          <span className="name">{name}</span>
        </div>
        <div className="quantity-section">
          <div
            className="arrow"
            onClick={() => deleteProductFromCart(orderItem)}
          >
            &#10094;
          </div>
          <span className="quantity"> {quantity}</span>
          <div className="arrow" onClick={() => addProductToCart(orderItem)}>
            &#10095;
          </div>
        </div>

        <div className="price-section">
          <span className="price"> ${quantity * price}</span>
        </div>
        <div
          className="remove-button"
          onClick={() => removeProductFromCart(orderItem)}
        >
          &#10005;
        </div>
      </div>
      <div className="cart-pricing-container">
        <h2>Cart Total</h2>
        <span> $ {cartTotal}</span>
      </div>
    </div>
  );
}
