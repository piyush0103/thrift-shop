import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../components/context/product-context";
import "./category.styles.scss";
export default function Category() {
  const { categoryMap } = useContext(CategoryContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoryMap[category]);
  useEffect(() => {
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
