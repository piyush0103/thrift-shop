import { CART_ACTION_TYPES } from "./cart-types";

export const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartDropDownOpen: false,
};

export const cartReducer = (cartState = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("Logging from cart-.......... ", cartState);

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      const state = {
        ...cartState,
        cartItems: payload,
      };
      console.log("Logging from cart-reducer ", state);
      return state;
    case CART_ACTION_TYPES.SET_CART_DROP_DOWN:
      return {
        ...cartState,
        isCartDropDownOpen: payload,
      };
    default:
      return cartState;
  }
};
