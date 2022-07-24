import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
export default function Navigation() {
  return (
    <React.Fragment>
      <div className="navigation">
      <div className="nav-logo">
        <Link className="nav-links" to="/">
        <Logo></Logo>
        </Link>
      </div>
      <div className="nav-links-container">
        <Link className="nav-links" to="/shop">Shop</Link>
        <Link className="nav-links" to="/sign-in">SignIn</Link>
      </div>
     
      </div>
      <Outlet />
    </React.Fragment>
  );
}
