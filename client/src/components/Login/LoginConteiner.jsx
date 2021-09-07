import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../API/authAPI';
import Login from './Login';

const LoginConteiner = () => {

   const dispatch = useDispatch();
   const userData = useSelector(state => state.authState.userData);

const sendLoginData = (login, password)=>{
 dispatch(authAPI.login(login, password))
}
   return <Login userData={userData} sendLoginData={sendLoginData} />
}; 

export default LoginConteiner;