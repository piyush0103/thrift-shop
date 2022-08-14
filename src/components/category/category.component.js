import React, { useContext } from 'react'
import DirectoryItem from '../directory-item/directory-item.component'
// import './category.container.styles.scss'
import {CategoriesContainer} from './category.container.styles'
import { CategoryContext } from "../../components/context/product-context";
  
export default function Category() {
  const { categoryMap } = useContext(CategoryContext);
    return (
    //     <div className="categories-container">
    // {Object.keys(categoryMap).map((title) => {
    //     console.log('printing in category',categoryMap[title][0],' title        ' ,title)
    //   return<DirectoryItem key={title}   title={title} category={categoryMap[title][0]}></DirectoryItem>
    //   })}
    //   {/* <h2>Heyyy</h2> */}
    // </div>

    <CategoriesContainer>
    {Object.keys(categoryMap).map((title) => {
        console.log('printing in category',categoryMap[title][0],' title        ' ,title)
      return<DirectoryItem key={title}   title={title} category={categoryMap[title][0]}></DirectoryItem>
      })}
      {/* <h2>Heyyy</h2> */}

    </CategoriesContainer>
    )
}
