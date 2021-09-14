import React from 'react';

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
               <AllPosts postsData={postState.postsData} />
            }

            <AllPosts postsData={postState.postsData} />
         </>
      )
   }
   return <NonePosts addPost={addPost} authState={authState} />
}
export default Posts;