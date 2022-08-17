import "./shopping-cart.styles.scss";
import { CartContext } from "../../components/context/cartContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../../store/cart/cart-action";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";
export default function ShoppingCart({ orderItem }) {
  console.log("prinitng from shoppingbag...", orderItem);
  // const {
  //   addProductToCart,
  //   deleteProductFromCart,
  //   cartTotal,
  //   removeProductFromCart,
  // } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
            onClick={() =>
              dispatch(deleteProductFromCart(cartItems, orderItem))
            }
          >
            &#10094;
          </div>
          <span className="quantity"> {quantity}</span>
          <div
            className="arrow"
            onClick={() => dispatch(addProductToCart(cartItems, orderItem))}
          >
            &#10095;
          </div>
        </div>

        <div className="price-section">
          <span className="price"> ${quantity * price}</span>
        </div>
        <div
          className="remove-button"
          onClick={() => dispatch((cartItems, orderItem))}
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
