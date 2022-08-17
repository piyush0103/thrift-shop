import { createAction } from "../../utils/reducers/reducer.utils";
import { CART_ACTION_TYPES } from "./cart-types";
import {} from './cart-reducer'

  const findProduct = (products, productToAdd) => {
    return products.find((product) => {
      if (product.id === productToAdd.id) {
        return product;
      }
    });
  };
  const addProduct = (products, productToAdd) => {
    // search if we have similar product already in cart
    const existingCartItem = findProduct(products, productToAdd);
  
    // if  available than  increase item quantity
    if (existingCartItem) {
      return products.map((product) => {
        return product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    }
  
    //  return updated cartItems
    return [...products, { ...productToAdd, quantity: 1 }];
  };
  
  const deleteProduct = (products, productToRemove) => {
    // search if we have similar product already in cart
    const existingCartItem = findProduct(products, productToRemove);
  
    // if  available than  increase item quantity
    if (existingCartItem) {
      if (existingCartItem.quantity == 1) {
        const updatedCart = products.filter((product) => {
          if (product.id !== productToRemove.id) {
            return product;
          }
        });
        return updatedCart;
      } else {
        return products.map((product) => {
          return product.id === productToRemove.id
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        });
      }
    }
  };
  
  const removeProduct = (products, productToRemove) => {
    // search if we have similar product already in cart
    const existingCartItem = findProduct(products, productToRemove);
  
    // if  available than  increase item quantity
    if (existingCartItem) {
      const updatedCart = products.filter((product) => {
        if (product.id !== productToRemove.id) {
          return product;
        }
      });
      return updatedCart;
    }
  };

export const setCartDropDownToggle = (boolean) => {
    console.log("logging from user-action", boolean);
    return createAction(CART_ACTION_TYPES.SET_CART_DROP_DOWN, boolean);
  };
  
   export const addProductToCart = (cartItems, productToAdd) => {
    // setProducts(addProduct(products, productToAdd));
    const updatedProducts = addProduct(cartItems, productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedProducts)
  };
  export const deleteProductFromCart = (cartItems, productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    const updatedProducts = deleteProduct(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedProducts)
};
export  const removeProductFromCart = (cartItems, productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    const updatedProducts = removeProduct(cartItems, productToRemove);

    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedProducts)
};