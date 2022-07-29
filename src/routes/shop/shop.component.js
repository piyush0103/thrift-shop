import React, { useContext } from "react";
import { ProductContext } from "../../components/context/product-context";
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductContext);
  // console.log('printing products in shop',products)
  return (
    <div className="products-container">
      {products.map(item => {
        console.log('priting prod',item)
        return <ProductCard key={item.id} item={item}></ProductCard>;
      })}
    </div>
  );
};
export default Shop;
