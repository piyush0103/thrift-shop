import React from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
export default function CategoryPreview({ title, item }) {
  return (
    <div className="category-preview-container">
      <h2>
      <Link to={title}>
        <span className={title}>{title}</span>
      </Link>
      </h2>
      <div className="preview">
        {item
          .filter((_, idx) => idx < 4)
          .map((product) => {
            console.log("printing in category preview", item);
            return <ProductCard key={product.id} item={product}></ProductCard>;
          })}{" "}
      </div>
    </div>
  );
}
