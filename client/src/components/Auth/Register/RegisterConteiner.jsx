import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import Register from './Register';

const RegisterConteiner = () => {
   const dispatch = useDispatch();

   const authState = useSelector(state => state.authState);

   const sendRegisterData = (login, password, password_confirm, email) => {
      dispatch(authAPI.register(login, password, password_confirm, email))
   }

   return <Register authState={authState} sendRegisterData={sendRegisterData} />
};

export default RegisterConteiner;