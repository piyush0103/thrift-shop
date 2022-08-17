import { createSelector } from "reselect";
const selectCartReducer = (state) => {
    console.log("logging from cart selector...",state)
  return state.cartReducer;
};
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartDropDownToggle = createSelector(
  [selectCartReducer],(cart) => cart.isCartDropDownOpen
);

export const selectCartCount = createSelector(
  [selectCartReducer],(cart) => {
    return cart.cartItems.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  })


export const selectCartTotal = createSelector(
  [selectCartReducer],(cart) => {
    return cart.cartItems.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  })


// const newCartCount = newCartItem.reduce((total, product) => {
//   return total + product.quantity;
// }, 0);

// const cartTotal = newCartItem.reduce((total, product) => {
//   return total + product.quantity * product.price;
// }, 0);

// export const cartItemSelector = (state) => {
//   console.log("prinitng in cart selector in cartSEECTOR", state);
//   return state.cartReducer.cartItem;
// };
