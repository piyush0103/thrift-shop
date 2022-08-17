import React, { useContext } from "react";
import "./categories-preview.styles.scss";
import {useSelector} from 'react-redux'
import {categoryMapSelector} from '../../utils/reducers/reducer.utils'

import { CategoryContext } from "../../components/context/product-context";// replaced as part of redux store
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  // const { categoryMap } = useContext(CategoryContext);
  const categoryMap= useSelector(categoryMapSelector)

  console.log("printing products in  category preview route", categoryMap);
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
