import React, { useContext, useState } from "react";
import { UserContext } from "../../components/context/user-context";
import { CartContext } from "../../components/context/cartContext";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
export default function Navigation() {
  const { currentUser, setcurrentUser } = useContext(UserContext);
  const { products, addProductToCart, isCartDropDownOpen } =
    useContext(CartContext);
  const [cartToggle, setCartToggle] = useState(false);
  console.log(currentUser, "loggin from navigation bar");
  console.log("here in navigation container");

  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <React.Fragment>
      <div className="navigation">
        <div className="nav-logo">
          <Link className="nav-links" to="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SignOut
            </span>
          ) : (
            <Link className="nav-links" to="/user-auth">
              SignIn
            </Link>
          )}

          <Link className="nav-links" to="/user-auth">
            SignUP
          </Link>

          <Link className="nav-links" to="/cart">
          <CartIcon></CartIcon>
          </Link>
        </div>
        {isCartDropDownOpen && <CartDropDown></CartDropDown>}
      </div>
      <Outlet />
    </React.Fragment>
  );
}
