import React, { useContext } from 'react'
import DirectoryItem from '../directory-item/directory-item.component'
// import './category.container.styles.scss'
import {CategoriesContainer} from './category.container.styles'
// import { CategoryContext } from "../../components/context/product-context"; //replaced by redux store
import {useSelector} from 'react-redux'
import {categoryMapSelector} from '../../utils/reducers/reducer.utils'
export default function Category() {
  // const { categoryMap } = useContext(CategoryContext);
   const categoryMap= useSelector(categoryMapSelector)
  console.log("finally coming inside category component ",categoryMap)
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
