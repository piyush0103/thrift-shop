import React from "react";
import "./category.styles.scss";
const CategoryItem = ({category}) => {
  const {id,imageUrl,title}=category
  console.log('printing data...',imageUrl)
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      {/* <img src={imageUrl} alt="image" /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
