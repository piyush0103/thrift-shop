import React, { useEffect, useState } from "react";

import SignInForm from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import './authentication.styles.scss'


export default function Authentication() {
  return (
    <div className="authentication-container">
  

      <br></br>

      <SignInForm />
      <SignUpForm />
    </div>
  );
}
