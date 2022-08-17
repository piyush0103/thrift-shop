import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("prinitng in SELECT_CATEGORY_REDUCER in utils", state);
  return state.categoriesReducer.categories;
}
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice
);

export const createAction = (type, payload) => {
  console.log("logging from createaction ", type, payload);
  return { type: type, payload: payload };
};

export const currentUserSelectors = (state) => {
  console.log("prinitng in navigation selector in utils", state);
  return state.userReducer.currentUser;
};

export const categoryMapSelector = createSelector([selectCategories],(categories)=>{

    console.log("categoryComponent... SELECTOR FIRED.......");
  console.log("prinitng in category  selector in utils", categories.length);
  return  categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        console.log("well what do we have acc", acc);
    
        return acc;
      }, {});
})



  export const cartItemSelector = (state => {
    // console.log("categoryComponent... SELECTOR FIRED.......");
    // console.log("prinitng in category  selector in utils", state);
    // return state.categoriesReducer.categories.reduce((acc, category) => {
    //   const { title, items } = category;
    //   acc[title.toLowerCase()] = items;
    //   console.log("well what do we have acc", acc);
  
    //   return acc;
    // }, {});
  });
  



// export const categoryMapSelector = (state => {
//   console.log("categoryComponent... SELECTOR FIRED.......");
//   console.log("prinitng in category  selector in utils", state);
//   return state.categoriesReducer.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     console.log("well what do we have acc", acc);

//     return acc;
//   }, {});
// });
