import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './authReducer/authReducer';
import { userReducer } from './userReducer/userReducer';
import { categoryReducer } from './categoryReducer/categoryReducer';
import { commentReducer } from './commentReducer/commentReducer';
import { postReducer } from './postReducer/postReducer';

const rootReducer = combineReducers({
	authState: authReducer,
	userState: userReducer,
	categoryState: categoryReducer,
	commentState: commentReducer,
	postState: postReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
