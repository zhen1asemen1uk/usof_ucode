import React from 'react'
import stl from '../../styles/Posts.module.css'

const AllPosts = (props) => {

   const { postsData } = props;

   if (typeof postsData === 'string') {
      return (
         <>
            <h1>{postsData}</h1>
         </>)
   }

   return (
      <div className={stl.wrappPost}>
         <div className={stl.posts}>
            {postsData.map((pst) => {
               return (
                  <div key={`${pst.title_post}_${pst.created_at}`} className={stl.post}>
                     <div className={stl.postTitle}>{pst.title_post}</div>
                     <p className={stl.postContent}>{pst.content_post}</p>
                     <p className={stl.postAuthor}>{pst.login}</p>
                     <span className={stl.postLike}>Like 99</span>
                  </div>)
            }
            )}
         </div>
      </div>
   )
}

export default AllPosts
