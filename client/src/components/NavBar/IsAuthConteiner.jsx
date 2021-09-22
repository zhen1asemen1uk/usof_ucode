import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import IsAuth from './IsAuth';
import { authAPI } from "../../API/authAPI";
import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';



const IsAuthConteiner = () => {
   const dispatch = useDispatch();

   const user = useSelector(state => state.authState.user);

   const searchAPI = (search) => {
      dispatch(postAPI.search(search));
   }
   const getAllPosts = () => {
      dispatch(postAPI.getAllPosts())
   }
   const getAllUsers = () => {
      dispatch(userAPI.getAllUsers())
   }
   const getUserByID = (id) => {
      dispatch(userAPI.getUserByID(id))
   }
   const getPostByUserID = (id) => {
      dispatch(postAPI.getPostByUserID(id))
   }
   const logout = () => {
      dispatch(authAPI.logout())
   }


   return <IsAuth
      searchAPI={searchAPI}
      getAllPosts={getAllPosts}
      getAllUsers={getAllUsers}
      getUserByID={getUserByID}
      getPostByUserID={getPostByUserID}
      logout={logout}
      user={user} />

}
export default IsAuthConteiner
