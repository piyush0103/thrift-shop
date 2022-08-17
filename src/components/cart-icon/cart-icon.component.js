import React, { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartIconContainer, ShoppingSvgContainer, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../context/cartContext";
import {selectCartCount,selectCartDropDownToggle} from '../../store/cart/cart-selector'
import {setCartDropDownToggle} from '../../store/cart/cart-action'
import {useSelector,useDispatch} from 'react-redux'

export default function CartIcon({}) {
  // const { cartItems, setProducts, isCartDropDownOpen,toggleCartDropDown } =
  //   useContext(CartContext);
    const cartCount = useSelector(selectCartCount)
    const toggleCartDropDown = useSelector(selectCartDropDownToggle)
     const dispatch=useDispatch();
  const [cartToggle, setCartToggle] = useState(false);
  const handleCartDropDowntoggle = (e) => {
    console.log("it is coming here", e.type);
    if (e.type == "mouseover") {
      setCartToggle(true);
     dispatch(setCartDropDownToggle(cartToggle)) ;
    } else {
      dispatch(setCartDropDownToggle(false)) ;
    }
  };

  return (
    // <div
    //   className="cart-icon-container"
    //   onMouseOver={handleCartDropDowntoggle}
    //   onMouseOut={handleCartDropDowntoggle}
    // >
    //   <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    //   <span className="item-count">{products.length} </span>
    // </div>

    <CartIconContainer
      className="cart-icon-container"
      onMouseOver={handleCartDropDowntoggle}
      onMouseOut={handleCartDropDowntoggle}
    >
      <ShoppingSvgContainer className="shopping-icon"></ShoppingSvgContainer>
      <ItemCount className="item-count">{cartCount} </ItemCount>
    </CartIconContainer>
  );
}
