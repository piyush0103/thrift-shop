import { useContext, useState, useEffect, createContext } from "react";
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
  const [products, setProducts] = useState([]);
  const [isCartDropDownOpen, setIsCartDropDownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = products.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setCartCount(newCartCount);
    // return () => {
    //   cleanup
    // }
  }, [products]);

  useEffect(() => {
    const cartTotal = products.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
    setCartTotal(cartTotal);
    // return () => {
    //   cleanup
    // }
  }, [products]);
  const addProductToCart = (productToAdd) => {
   
    setProducts(addProduct(products, productToAdd));
  };
  const deleteProductFromCart = (productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    setProducts(deleteProduct(products, productToRemove));
  };
  const removeProductFromCart = (productToRemove) => {
    // console.log('here it is coming.....',productToAdd)
    setProducts(removeProduct(products, productToRemove));
  };
  const value = {
    products,
    addProductToCart,
    isCartDropDownOpen,
    setIsCartDropDownOpen,
    deleteProductFromCart,
    removeProductFromCart,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
