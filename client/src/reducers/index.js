import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { categoryReducer } from './categoryReducer'
import { commentReducer } from './commentReducer'
import { postReducer } from './postReducer'



const rootReducer = combineReducers({
   authPage: authReducer,
   userPage: userReducer,
   categoryPage: categoryReducer,
   commentPage: commentReducer,
   postPage: postReducer
})

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
