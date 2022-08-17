import  {compose,createStore ,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'



const customMiddleWare=(store)=>(next)=>(action)=>{
    if(!action.type){
        console.log("Custom middleware logger....  no action type",action)
        return next(action)
    }
    else{
        console.log("Custom middleware logger....  action_type ::",action.type ,action)
        console.log("Custom middleware logger....  currentstate ::",store.getState())
        next(action)

        console.log("Custom middleware logger....  action_type ::",action.type ,action)
        console.log("Custom middleware logger....  nextState ::",store.getState())
    }
}
const middlewares =[customMiddleWare]
 const composeEnhancer=compose(applyMiddleware(...middlewares))
export const store =createStore(rootReducer,undefined,composeEnhancer)