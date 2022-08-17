import Home from "./routes/home/home.component";
import UserLogIn from "./routes/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Cart from "./routes/cart/cart.component";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {
  onAuthStateChangelistener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangelistener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user, " user auth state changed in  user context");
      dispatch(setCurrentUser(user)); // dispatches action to root reducer function which dispatches to every reducer function
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home />} />
        <Route path="/user-auth" element={<UserLogIn />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
