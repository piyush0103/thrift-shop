import { useContext, useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import {Route,Routes} from 'react-router-dom'
import { CategoryContext } from "../../components/context/product-context";
import Category from "../category/category.component";
import { getCategoriesCollections } from "../../utils/firebase/firebase.utils";
import { useDispatch,useSelector } from "react-redux";
import { setCategories } from "../../store/category/category-action";

const Shop = () => {
//   const dispatch = useDispatch();

// useEffect(() => {
//   const getcategoryMap = async () => {
//     const categoriesArray = await getCategoriesCollections();
//     console.log("printing category map in shop component", categoriesArray);
//     dispatch(setCategories(categoriesArray));
//   };

//   getcategoryMap()

// }, [])

  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
        <Route path=":category" element={<Category></Category>}></Route>
      </Routes>
    </div>
  );
};
export default Shop;
