import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import CreateNewPass from './CreateNewPass';

const CreateNewPassConteiner = () => {
   const dispatch = useDispatch();

   const passwordReset = useSelector(state => state.authState.passwordReset);

   const password_reset = (token, newPass) => {
      dispatch(authAPI.password_reset_link(token, newPass));
   }

   return (
      <>
         <CreateNewPass password_reset={password_reset} passwordReset={passwordReset} />
      </>
   );
};

export default CreateNewPassConteiner;