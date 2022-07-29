import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";
import "./sign-in.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button-component";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
export default function SignInForm() {
  const signInData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(signInData);

  async function asyncTask() {
    const response = await getRedirectResult(auth);
    if (response) {
      console.log(response, "after redirect urlk");
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }
  useEffect(() => {
    asyncTask();
    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) return;
    // try {
    //   const response = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   if (response) {
    //     console.log(
    //       response,
    //       "response recieved in createAuthUserWithEmailAndPassword"
    //     );
    //     const userDocRef = await createUserDocumentFromAuth(response.user, {
    //       displayName,
    //     });
    //     console.log("auth user doc created", userDocRef);
    //   }
    // } catch (err) {
    //   console.log(err, "error while creating user");
    //   if (err.code === "auth/email-already-in-use") {
    //     console.log("error creating the user auth/email-already-in-use");
    //     alert("cannot create same user doc user already exist");
    //   }
    // } finally {
    //   resetFormFields();
    // }
  };

  const logGoogleUserPopup = async () => {
    try {
       await signInWithGooglePopup();
     
    } catch (err) {
      console.log("why this error", err);
    }
  };

  const signInWithEmail = async (e) => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response, "printing response after sign in");
      createUserDocumentFromAuth(response.user);
    } catch (err) {
      alert(err.code, "hey this is the error please fix it");
    } finally {
      resetFormFields();
    }
  };
  const resetFormFields = () => {
    setFormData(signInData);
  };

  const { email, password } = formData;
  return (
    <div className="sign-in-container">
      <h1>Already have an account ?</h1>

      <h2> this is a sign in page</h2>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleInputChange}
        ></FormInput>
        <div className="buttons-container">
          <Button
            buttontype={BUTTON_TYPE_CLASSES.inverted}
            type="submit"
            onClick={signInWithEmail}
          >
            {" "}
            Sign in
          </Button>
          <Button
            type="button"
            buttontype={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUserPopup}
          >
            {" "}
            Sign in with google{" "}
          </Button>

          <Button
            type="button"
            buttontype={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleRedirect}
          >
            Sign in with google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
}
