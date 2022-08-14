import React from "react";
/*
default 
inverted
google sign in
*/
import './button.styles.scss'
import {BaseButton,Inverted,GoogleSignIn} from './button.styles'
 export const BUTTON_TYPE_CLASSES={
   base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}


const getButton=(buttonType=BUTTON_TYPE_CLASSES.base)=>(
{
  [BUTTON_TYPE_CLASSES.base]:BaseButton,
  [BUTTON_TYPE_CLASSES.google]:GoogleSignIn,
  [BUTTON_TYPE_CLASSES.inverted]:Inverted,

}[buttonType]
)
// export default function Button({ children,buttontype,...otherProps}) {
  // const CustomButton=getButton(buttontype)
//   return <button className={`button-container ${buttontype}`}{...otherProps}>{children}</button>;
//   }



  export default function Button({ children,buttontype,...otherProps}) {
    const CustomButton=getButton(buttontype)
    return <CustomButton {...otherProps}>{children}</CustomButton>;
    }