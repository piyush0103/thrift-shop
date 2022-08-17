import { useState, useEffect, createContext, useReducer } from "react";
import {createAction} from "../../utils/reducers/reducer.utils";

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartDropDownOpen: false,
};

const cartContextReducer = (cartState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEM":
      return {
        ...cartState,
        ...payload,
      };
    case "SET_CART_DROP_DOWN":
      return {
        ...cartState,
        ...payload,
      };
    default:
      throw new Error("Wrong action in CartReducer");
  }
};

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
export const CartContext = createContext({
  products: [],
  setProducts: () => null,
  isCartDropDownOpen: false,
  setIsCartDropDownOpen: () => null,
  cartCount: 0,
  cartTotal: 0,
});

export const CartContextProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);
  // const [isCartDropDownOpen, setIsCartDropDownOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0); replaced as part of reducer concept

  const [{ cartItems, cartCount, cartTotal, isCartDropDownOpen }, dispatch] =
    useReducer(cartContextReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItem) => {
    const newCartCount = newCartItem.reduce((total, product) => {
      return total + product.quantity;
    }, 0);

    const cartTotal = newCartItem.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);

    dispatch(
      createAction("SET_CART_ITEM", {
        cartItems: newCartItem,
        cartCount: newCartCount,
        cartTotal: cartTotal,
      })
    );
  };

  // useEffect(() => {
  //   const newCartCount = products.reduce((total, product) => {
  //     return total + product.quantity;
  //   }, 0);
  //   setCartCount(newCartCount);

  // }, [products]);

  // useEffect(() => {
  //   const cartTotal = products.reduce((total, product) => {
  //     return total + product.quantity * product.price;
  //   }, 0);
  //   setCartTotal(cartTotal);

  // }, [products]);
  const addProductToCart = (productToAdd) => {
    // setProducts(addProduct(products, productToAdd));
    const updatedProducts = addProduct(cartItems, productToAdd);
    updateCartItemReducer(updatedProducts);
  };
  const deleteProductFromCart = (productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    const updatedProducts = deleteProduct(cartItems, productToRemove);
    updateCartItemReducer(updatedProducts);
  };
  const removeProductFromCart = (productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    const updatedProducts = removeProduct(cartItems, productToRemove);

    updateCartItemReducer(updatedProducts);
  };

  const toggleCartDropDown = (cartDropDown) => {
    console.log("context reached cart context dropdown statuys ", cartDropDown);
    dispatch(createAction("SET_CART_DROP_DOWN",{ isCartDropDownOpen: cartDropDown}));
  };
  const value = {
    cartItems,
    addProductToCart,
    isCartDropDownOpen,
    deleteProductFromCart,
    removeProductFromCart,
    toggleCartDropDown,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
