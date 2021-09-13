import React from 'react';
import "../../styles/Post.css";

import AddPost from './AddPost';
import AllPosts from './AllPosts';
import NonePosts from './NonePosts';

const Posts = (props) => {

   const { authState, postState, addPost } = props;
   console.log(postState);
   if (postState.postsData.length > 0) {
      return (
         <>
            {authState.isAuth ?
               <AddPost addPost={addPost} /> :
               <AllPosts postsData={postState.postsData} />
            }

            <AllPosts postsData={postState.postsData} />
         </>
      )
   }
   return <NonePosts addPost={addPost} />
}
export default Posts;