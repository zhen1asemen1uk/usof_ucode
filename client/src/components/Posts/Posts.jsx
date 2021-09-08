import React from 'react';
import "../../styles/Post.css";

import AddPost from './AddPost';
import AllPosts from './AllPosts';
import NonePosts from './NonePosts';

const Posts = (props) => {

   const { authState, postState, addPost } = props;

   if (postState.postsData.length > 0) {
      return (
         <>
            {authState.isAuth ?
               <AddPost addPost={addPost} /> :
               <AllPosts postState={postState} />
            }

            <AllPosts postState={postState} />
         </>
      )
   }
   return <NonePosts />
}
export default Posts;