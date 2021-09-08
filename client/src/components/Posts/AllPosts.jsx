import React from 'react'
import '../../styles/Post.css'

const AllPosts = (props) => {
   
   const { postState } = props;

   return (
      <div className='wrapp'>
         <div className='posts'>
            {postState.postsData.map((pst) =>
               <div key={pst.created_at} className='post'>
                  <div className='postTitle'>{pst.title_post}</div>
                  <p className='postContent'>{pst.content_post}</p>

                  <p className='postAuthor'>{pst.id_author_post}</p>
               </div>
            )}
         </div>
      </div>
   )
}

export default AllPosts
