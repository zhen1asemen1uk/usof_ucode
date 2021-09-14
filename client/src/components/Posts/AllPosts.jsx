import React from 'react'

const AllPosts = (props) => {

   const { postsData } = props;

   if (typeof postsData === 'string') {
      return (
         <>
            <h1>postsData</h1>
         </>)
   }

   return (
      <div className='wrappPost'>
         <div className='posts'>
            {postsData.map((pst) => {
               return (
                  <div key={`${pst.title_post}_${pst.created_at}`} className='post'>
                     <div className='postTitle'>{pst.title_post}</div>
                     <p className='postContent'>{pst.content_post}</p>
                     <p className='postAuthor'>{pst.login}</p>
                     <span className='postLike'>Like 99</span>
                  </div>)
            }
            )}
         </div>
      </div>
   )
}

export default AllPosts