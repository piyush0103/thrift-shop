import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangelistener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currenUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangelistener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user, " user auth state changed in  user context");
      setcurrentUser(user);
    });

    
    return unsubscribe;
  }, []);

  // const contextCustom={
  //     currentUser:'',
  //     setCurrentUser:(user)=>{
  //         contextCustom.currentUser=user
  //     }
  // }

  const userContext = { currentUser, setcurrentUser };
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};
