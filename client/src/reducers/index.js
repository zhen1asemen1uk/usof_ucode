import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { categoryReducer } from './categoryReducer'
import { commentReducer } from './commentReducer'
import { postReducer } from './postReducer'

export const initialState = {
   isAush: false,
}

const rootReducer = combineReducers({
   authReducer,
   userReducer,
   categoryReducer,
   commentReducer,
   postReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState())