import React, { useContext, useState } from "react";
import { UserContext } from "../../components/context/user-context";
import { CartContext } from "../../components/context/cartContext";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./navigation.styles.scss";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from "./navigation.styles";
import {useSelector} from 'react-redux'
import { userSignOut } from "../../utils/firebase/firebase.utils";
import  {currentUserSelectors} from "../../utils/reducers/reducer.utils"
import {selectCartCount,selectCartDropDownToggle} from '../../store/cart/cart-selector'
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
export default function Navigation() {
 const currentUser = useSelector(currentUserSelectors)
 const isCartDropDownOpen =useSelector(selectCartDropDownToggle)
  // const { currentUser, setcurrentUser } = useContext(UserContext); replaced with redux
  // const { products, addProductToCart, isCartDropDownOpen } =
  //   useContext(CartContext);
  // const [cartToggle, setCartToggle] = useState(false);
  console.log(currentUser, "loggin from navigation bar");
  console.log("here in navigation container");

  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        
         {/* <div className="navigation"> */}
        {/* <div className="nav-logo"> */}
          {/* <Link className="logo-container" to="/"> */}
          <LogoContainer to="/">
            <Logo></Logo>
          {/* </Link> */}
          </LogoContainer>
        {/* </div>
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
        </div> */}
        {/* {isCartDropDownOpen && <CartDropDown></CartDropDown>} */}
      {/* </div> */}

      <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SignOut
            </span>
          ) : (
            <NavLink to="/user-auth">
              SignIn
            </NavLink>
          )}

          <NavLink to="/user-auth">
            SignUP
          </NavLink>

          <NavLink  to="/cart">
          <CartIcon></CartIcon>
          </NavLink>
        </NavLinksContainer> 

    {isCartDropDownOpen && <CartDropDown></CartDropDown>}
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
}
