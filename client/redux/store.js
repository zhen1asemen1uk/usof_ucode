import { combineReducers, createStore } from 'redux'

import authReducer from './authReducer'
import userReducer from './userReducer'

const reducers =  combineReducers({
   authReducer: authReducer,
   userReducer: userReducer
   
})


let store = createStore(reducers)

export default store