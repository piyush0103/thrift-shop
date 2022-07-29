import { useContext, useState, useEffect, createContext } from "react";
import SHOP_DATA from "../../shop-data.json";

export const ProductContext = createContext({
  products:[],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
//  console.log('printing from contex product...',products)
//   useEffect(() => {
//     setProducts(SHOP_DATA);
//   }, [products]);

const value={products}

return(<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
};
