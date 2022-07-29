import React from "react";
/*
default 
inverted
google sign in
*/
import './button.styles.scss'

 export const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted'
}
export default function Button({ children,buttontype,...otherProps}) {
  return <button className={`button-container ${buttontype}`}{...otherProps}>{children}</button>;
  }
