import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import Loading from '../Loading';
import CreateNewPass from './CreateNewPass';

const CreateNewPassConteiner = () => {
   const dispatch = useDispatch();

   const passwordReset = useSelector(state => state.authState.passwordReset);
   const isLoading = useSelector(store => store.authState.isLoading);

   const password_reset = (token, newPass) => {
      dispatch(authAPI.password_reset_link(token, newPass));
   }

   return (
      <>{isLoading === true ?
         <Loading /> :
         <CreateNewPass password_reset={password_reset} passwordReset={passwordReset} />
      }</>
   );
};

export default CreateNewPassConteiner;