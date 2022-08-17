import { createAction } from "../../utils/reducers/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category-types";
export const setCategories = (categoriesArray) => {
  console.log("logging from user-action", categoriesArray);
  return createAction(CATEGORY_ACTION_TYPES.GET_CATEGORIES, categoriesArray);
};
