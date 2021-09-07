import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { postAPI } from '../../API/postAPI';
import Posts from './Posts';


const PostsConteiner = () => {

   const dispatch = useDispatch();
   const postState = useSelector(state => state.postState.postsData);
            console.log(`post API ${postState.data}`)


const addPost = (title,content,categories)=>{
   dispatch(postAPI.addPost(title,content,categories))
}

//   const myGetAllPosts = ()=>{
//    dispatch(postAPI.getAllPosts())
// }

// console.log(myGetAllPosts());

   return (
     <Posts  postState={postState} addPost={addPost}/>
   )
};

export default PostsConteiner;;