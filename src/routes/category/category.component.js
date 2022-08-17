import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../components/context/product-context";
import "./category.styles.scss";
import {useSelector} from 'react-redux'
import {categoryMapSelector} from '../../utils/reducers/reducer.utils'
export default function Category() {
  // const { categoryMap } = useContext(CategoryContext); // replaced as part of redux store enhancement
  
  console.log("categoryComponent... RENDER?RERENDER")
  const categoryMap= useSelector(categoryMapSelector)

  const { category } = useParams();
  const [products, setProducts] = useState(categoryMap[category]);
  useEffect(() => {
    console.log("categoryComponent... useEFFECTFIRED...setProducts")
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <h2 className="title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
      </div>
    </>
  );
}
