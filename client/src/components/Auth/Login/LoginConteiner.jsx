 import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import { postAPI } from '../../../API/postAPI';
import PostsConteiner from '../../Posts/PostsConteiner';
import Loading from '../Loading';
import Login from './Login';

const LoginConteiner = () => {
   const dispatch = useDispatch();

   const authState = useSelector(state => state.authState);
   const isLoading = useSelector(store => store.authState.isLoading);

   const sendLoginData = (login, password) => {
      dispatch(authAPI.login(login, password));
      dispatch(postAPI.getAllPosts());
   }

   return (<>
      {authState.isAuth ?
         isLoading === true ? <Loading /> : <PostsConteiner /> :
         isLoading === true ? <Loading /> : <Login authState={authState} sendLoginData={sendLoginData} />}
   </>)
};

export default LoginConteiner;