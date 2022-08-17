import { createContext, useEffect, useReducer, useState } from "react";
import {
  onAuthStateChangelistener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
 import {createAction} from "../../utils/reducers/reducer.utils"
export const UserContext = createContext({
  currenUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const Initial_State = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log('coming in user reducer....',state)
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`Unhandled type ${type} in UserReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setcurrentUser] = useState(null); replacing with reducer
  const [{ currentUser }, dispatch] = useReducer(userReducer, Initial_State);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangelistener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user, " user auth state changed in  user context");
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [dispatch]);

  // const contextCustom={
  //     currentUser:'',
  //     setCurrentUser:(user)=>{
  //         contextCustom.currentUser=user
  //     }
  // }

  const userContext = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};
