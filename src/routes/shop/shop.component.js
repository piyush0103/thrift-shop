import { useContext } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import {Route,Routes} from 'react-router-dom'
import { CategoryContext } from "../../components/context/product-context";
import Category from "../category/category.component";
const Shop = () => {
  const { categoryMap } = useContext(CategoryContext);
  console.log("printing products in shop", categoryMap);
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
