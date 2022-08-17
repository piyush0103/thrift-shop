import {CATEGORY_ACTION_TYPES} from './category-types'
import {createAction} from '../../utils/reducers/reducer.utils'

export const CATEGORY_INITIAL_STATE={
    categories:[]
}

export const categoriesReducer=(state=CATEGORY_INITIAL_STATE,action)=>{
    const {type,payload}=action
    console.log("logging from category map reducer...",action)
    switch (type) {
        case CATEGORY_ACTION_TYPES.GET_CATEGORIES:
        return { ...state, categories: payload };
            
    
        default:
            return state;
    }
}
