import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authAPI } from '../../../API/authAPI';

import ResetPassword from './ResetPassword';

const ResetPasswordConteiner = () => {
   const dispatch = useDispatch();

   const authState = useSelector(state => state.authState);

   const password_reset = (login) => {
      dispatch(authAPI.password_reset(login));
   }

   return (
      <>
         <ResetPassword password_reset={password_reset} authState={authState} />
      </>
   );
};

export default ResetPasswordConteiner;