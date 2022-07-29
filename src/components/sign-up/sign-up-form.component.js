import React, { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import { BUTTON_TYPE_CLASSES } from "../button/button-component";
import Button from "../button/button-component";
// import { UserContext } from "../../components/context/user-context";
import './sign-up.styles.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formData, setformData] = useState(defaultFormData);
  // const { setcurrentUser } = useContext(UserContext);
  const { displayName, email, password, confirmPassword } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const resetFormFields = () => {
    setformData(defaultFormData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        console.log(
          response,
          "response recieved in createAuthUserWithEmailAndPassword"
        );

        // setcurrentUser(response.user)
        const userDocRef = await createUserDocumentFromAuth(response.user, {
          displayName,
        });
        console.log("auth user doc created", userDocRef);
      }
    } catch (err) {
      console.log(err, "error while creating user");
      if (err.code === "auth/email-already-in-use") {
        console.log("error creating the user auth/email-already-in-use");
        alert("cannot create same user doc user already exist");
      }
    } finally {
      resetFormFields();
    }
  };
  return (
    <div className="sign-up-container">
      <span>Don't have an account  ?</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="displayName"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleInputChange}
        />

        <FormInput
          label="email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <FormInput
          label="ConFirmPassword"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />

        <Button buttontype={BUTTON_TYPE_CLASSES.inverted} type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
