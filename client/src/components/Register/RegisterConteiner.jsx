import React from 'react';
import { useDispatch } from "react-redux";

import { authAPI } from '../../API/authAPI';
import Register from './Register';

const RegisterConteiner = () => {

   const dispatch = useDispatch();

const sendRegisterData = (login, password, password_confirm, email)=>{
 dispatch(authAPI.register(login, password, password_confirm, email))
}

   return <Register sendRegisterData={sendRegisterData}/>
};

export default RegisterConteiner;