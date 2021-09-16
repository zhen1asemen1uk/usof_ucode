import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { postAPI } from '../../API/postAPI';
import Posts from './Posts';

const PostsConteiner = () => {
   const dispatch = useDispatch();

   const postState = useSelector(state => state.postState);
   const authState = useSelector(state => state.authState);

   const addPost = (title, content, categories) => {
      dispatch(postAPI.addPost(title, content, categories));
   }

   const getPostByID = (id) => {
      dispatch(postAPI.getPostByID(id));
   }
   const getPostByUserID = (id) => {
      dispatch(postAPI.getPostByUserID(id));
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

   return <Posts authState={authState} postState={postState} addPost={addPost} getPostByID={getPostByID}/>
};

export default PostsConteiner;;