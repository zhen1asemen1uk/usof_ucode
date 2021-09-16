import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';
import Users from './Users';

export const UsersConteiner = () => {
   const dispatch = useDispatch();

   const userState = useSelector(state => state.userState);

   const getAllUsers = () => {
      dispatch(userAPI.getAllUsers());
   }

   const getUserByID = (userID) => {
      dispatch(userAPI.getUserByID(userID));
   }
   
   const getPostByUserID = (userID) => {
      dispatch(postAPI.getPostByUserID(userID));
   }
   useEffect(() => {
      getAllUsers()
   }, [])
   
   return (
      <Users userState={userState} getUserByID={getUserByID} getPostByUserID={getPostByUserID} />
   )
};
export default UsersConteiner;