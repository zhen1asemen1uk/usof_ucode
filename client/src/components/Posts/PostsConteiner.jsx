import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';
import {
   sortByTitleASC_Post, sortByTitleDESC_Post,
   sortByAuthorASC_Post, sortByAuthorDESC_Post,
   sortByTimeASC_Post, sortByTimeDESC_Post
} from '../../reducers/postReducer/postReducer';

import Posts from './Posts';

const PostsConteiner = () => {
   const dispatch = useDispatch();

   let postState = useSelector(state => state.postState);
   const authState = useSelector(state => state.authState);

   const addPost = (title, content, categories) => {
      dispatch(postAPI.addPost(title, content, categories));
   }

   //for author Links
   const getUserByID = (userID) => {
      dispatch(userAPI.getUserByID(userID));
   }

   const getPostByUserID = (id) => {
      dispatch(postAPI.getPostByUserID(id));
   }

   //sort
   const sortByTitleASC = () => {
      dispatch(sortByTitleASC_Post(postState.postsData));
   }

   const sortByTitleDESC = () => {
      dispatch(sortByTitleDESC_Post(postState.postsData));
   }

   const sortByAuthorASC = () => {
      dispatch(sortByAuthorASC_Post(postState.postsData));
   }

   const sortByAuthorDESC = () => {
      dispatch(sortByAuthorDESC_Post(postState.postsData));
   }

   const sortByTimeASC = () => {
      dispatch(sortByTimeASC_Post(postState.postsData));
   }

   const sortByTimeDESC = () => {
      dispatch(sortByTimeDESC_Post(postState.postsData));
   }
   //Other
   const getPostByID = (id) => {
      dispatch(postAPI.getPostByID(id));
   }

   const getCommentsPostByID = (id) => {
      dispatch(postAPI.getCommentsPostByID(id));
   }

   const addCommentsForPost = (id, content) => {
      dispatch(postAPI.addCommentsForPost(id, content));
   }

   const getAllCategoryByPostID = (id) => {
      dispatch(postAPI.getAllCategoryByPostID(id));
   }

   const addLikeForPost = (id) => {
      dispatch(postAPI.addLikeForPost(id));
   }

   const getAllLikeByPostID = (id) => {
      dispatch(postAPI.getAllLikeByPostID(id));
   }

   const updatePost = (id, title, content, categories) => {
      dispatch(postAPI.updatePost(id, title, content, categories));
   }

   const deletePost = (id) => {
      dispatch(postAPI.deletePost(id));
   }

   const deleteLikeByPost = (id) => {
      dispatch(postAPI.deleteLikeByPost(id));
   }



   useEffect(() => {
      dispatch(postAPI.getAllPosts());
   }, [])

   return <Posts authState={authState}
      postState={postState}
      addPost={addPost}
      getPostByID={getPostByID}
      getUserByID={getUserByID}
      getPostByUserID={getPostByUserID}
      sortByTitleASC={sortByTitleASC}
      sortByTitleDESC={sortByTitleDESC}
      sortByAuthorASC={sortByAuthorASC}
      sortByAuthorDESC={sortByAuthorDESC}
      sortByTimeASC={sortByTimeASC}
      sortByTimeDESC={sortByTimeDESC}
   />
};

export default PostsConteiner;;