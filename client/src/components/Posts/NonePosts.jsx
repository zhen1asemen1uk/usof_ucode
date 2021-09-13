import React from 'react'
import "../../styles/Post.css";
import AddPost from './AddPost';

const NonePosts = (props) => {
   const { addPost } = props;

   return (
      <>
         <h1>None posts 😕</h1>
         <AddPost addPost={addPost} />
      </>
   )
}
export default NonePosts