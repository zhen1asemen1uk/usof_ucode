import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from '../../API/userAPI';
import Users from './Users';
import '../../styles/Users.css'

export const UsersConteiner = () => {
   const dispatch = useDispatch();

   const userState = useSelector(state => state.userState);

   const getAllUsers = () => {
      dispatch(userAPI.getAllUsers());
   }

   useEffect(() => {
      getAllUsers()
   }, [])

   return (
      <Users userState={userState} />
   )
};
export default UsersConteiner;