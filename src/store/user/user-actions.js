import {createAction} from '../../utils/reducers/reducer.utils'
import {USER_ACTION_TYPE} from './user.types'
 export const setCurrentUser = (user) => {
   console.log("logging from user-action",user  )
    return createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user);
  };
