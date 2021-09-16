import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import PostsConteiner from '../../Posts/PostsConteiner';
import Login from './Login';

const LoginConteiner = () => {
   const dispatch = useDispatch();

   const authState = useSelector(state => state.authState);

   const sendLoginData = (login, password) => {
      dispatch(authAPI.login(login, password))
   }

   return (<>
      {authState.isAuth ? <PostsConteiner /> : <Login authState={authState} sendLoginData={sendLoginData} />}
   </>)
};

export default LoginConteiner;