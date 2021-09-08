import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { postAPI } from '../../API/postAPI';
import Posts from './Posts';


const PostsConteiner = () => {

   const dispatch = useDispatch();
   const state = useSelector(state => state);
   const postState = state.postState;
   const authState = state.authState;

   //useMemo
   const getAllPostsToPage = () => {
      dispatch(postAPI.getAllPosts())
   }

   const addPost = (title, content, categories) => {
      dispatch(postAPI.addPost(title, content, categories))
   }

   useEffect(() => {
      getAllPostsToPage()
   }, []);

   return <Posts authState={authState} postState={postState} addPost={addPost} />
};

export default PostsConteiner;;