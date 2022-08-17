import React, { useEffect } from 'react';
import Category from '../../components/category/category.component';
import { getCategoriesCollections } from "../../utils/firebase/firebase.utils";
import { useDispatch,useSelector } from "react-redux";
import { setCategories } from "../../store/category/category-action";

const Home=()=> {
  const dispatch = useDispatch();

useEffect(() => {
  const getcategoryMap = async () => {
    const categoriesArray = await getCategoriesCollections();
    console.log("printing category map in shop component", categoriesArray);
    dispatch(setCategories(categoriesArray));
  };

  getcategoryMap()

}, [])
  return (
   <Category></Category>
  );
}

export default Home;
