import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { postAPI } from '../../../API/postAPI';
import Loading from '../../Auth/Loading';
import UserPage from './UserPage'

const UserPageConteiner = () => {
   const dispatch = useDispatch();

   const userPage = useSelector(store => store.userState.userPage);
   const posts = useSelector(store => store.postState.postDataByUserID);
   const isLoading = useSelector(state => state.authState.isLoading);

   const getPostByUserID = (userPageID) => {
      dispatch(postAPI.getPostByUserID(userPageID))
   }

   return (
      <>{isLoading === true ?
         <Loading /> :
         <UserPage userPage={userPage} posts={posts} getPostByUserID={getPostByUserID} />
      }</>
   )
};

export default UserPageConteiner;
