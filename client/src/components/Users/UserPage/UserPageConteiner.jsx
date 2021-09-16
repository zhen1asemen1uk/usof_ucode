import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { postAPI } from '../../../API/postAPI';
import UserPage from './UserPage'

const UserPageConteiner = () => {
   const dispatch = useDispatch();

   const userPage = useSelector(store => store.userState.userPage);
   const posts = useSelector(store => store.postState.postDataByUserID);

   const getPostByUserID = (userPageID) => {
      dispatch(postAPI.getPostByUserID(userPageID))
   }

   return (
      <UserPage userPage={userPage} posts={posts} getPostByUserID={getPostByUserID} />
   )
};

export default UserPageConteiner;
