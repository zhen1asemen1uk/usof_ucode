import React from 'react'
import '../../styles/Posts.css'

const AllPosts = (props) => {

   const { postsData } = props;
   return (
      <div className='wrappPost'>
         <div className='posts'>
            {postsData.map((pst) => {
               return (
                  <div key={`${pst.title_post}_${pst.created_at}`} className='post'>
                     <div className='postTitle'>{pst.title_post}</div>
                     <p className='postContent'>{pst.content_post}</p>

                     <p className='postAuthor'>{pst.id_author_post}</p>
                  </div>)
            }
            )}
         </div>
      </div>
   )
}

export default AllPosts
