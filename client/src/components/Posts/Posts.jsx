import React from 'react';

import AddPost from './AddPost';
import AllPosts from './AllPosts';

import stl from '../../styles/Posts.module.css'

const Posts = (props) => {

   const { authState, postState, addPost, getUserByID, getPostByUserID,
      sortByTitleASC, sortByTitleDESC, sortByAuthorASC, sortByAuthorDESC,
      sortByTimeASC, sortByTimeDESC} = props;


   return (
      <>
         <div className={stl.sortBar}>
            <div>Sort by:</div>
            <div className={stl.sortCategory}>by Title:
               <button onClick={() => { sortByTitleASC() }}>ASC</button>
               <button onClick={() => { sortByTitleDESC() }}>DESC</button>
            </div>
            <div className={stl.sortCategory}>by Author:
               <button onClick={() => { sortByAuthorASC() }}>ASC</button>
               <button onClick={() => { sortByAuthorDESC() }}>DESC</button>
            </div>
            <div className={stl.sortCategory}>by Time:
               <button onClick={() => { sortByTimeASC() }}>ASC</button>
               <button onClick={() => { sortByTimeDESC() }}>DESC</button>
            </div>
         </div>
         {authState.isAuth ?

            <AddPost addPost={addPost} /> :
            <AllPosts
               postsData={postState.postsData}
               getUserByID={getUserByID}
               getPostByUserID={getPostByUserID}
            />
         }

         <AllPosts
            postsData={postState.postsData}
            getUserByID={getUserByID}
            getPostByUserID={getPostByUserID}
         />
      </>
   )

}
export default Posts;