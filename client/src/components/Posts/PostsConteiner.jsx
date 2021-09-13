import React, { useMemo, useEffect } from 'react';
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
   // const getAllPosts = async () => {//!!!!!!!!!!!!!!!!!!!!!!!!!!
   //    await dispatch(postAPI.getAllPosts());
   // }

   // useMemo(() => getAllPosts(),[]);

   useEffect(() => {
      dispatch(postAPI.getAllPosts());
   }, [])

   return <Posts authState={authState} postState={postState} addPost={addPost} />
};

export default PostsConteiner;;