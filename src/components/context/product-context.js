import { useContext, useState, useEffect, createContext } from "react";
// import SHOP_DATA from "../../shop-data.json"
import { getCategoriesCollections } from "../../utils/firebase/firebase.utils";
export const CategoryContext = createContext({
  categoryMap: {},
  setCategoryMap: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  //  console.log('printing from contex product...',products)
  //   useEffect(() => {
  //     setProducts(SHOP_DATA);
  //   }, [products]);

  const getcategoryMap=async ()=>{

    const categoryMap=await  getCategoriesCollections()
    console.log('printing category map',categoryMap)
    setCategoryMap(categoryMap)
  }
useEffect(() => {
  getcategoryMap()

}, [])

  const value = { categoryMap };

  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  );
};
