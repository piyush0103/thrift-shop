import React, { useContext } from "react";
import "./categories-preview.styles.scss";

import { CategoryContext } from "../../components/context/product-context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoryContext);
  console.log("printing products in shop", categoryMap);
  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            item={categoryMap[title]}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
