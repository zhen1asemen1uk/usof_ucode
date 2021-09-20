import React from 'react'
import { Link } from "react-router-dom";

import stl from '../../styles/Posts.module.css'

const AllPosts = (props) => {

   const { postsData, getUserByID, getPostByUserID } = props;

   if (typeof postsData === 'string') {
      return (<><h1>{postsData}</h1> </>)
   }
   // console.log(postsData);
   return (
      <div className={stl.wrappPost}>
         <div className={stl.posts}>
            {postsData.map((pst) => {
               return (
                  <div key={`${pst.title_post}_${pst.created_at}`} className={stl.post}>
                     <div className={stl.postTitle}>{pst.title_post}</div>
                     <p className={stl.postContent}>{pst.content_post}</p>

                     <div className={stl.fiels}>

                        <span className={stl.postLike}>Like {Math.floor(Math.random() * (100 - 0)) + 0}</span>

                        <Link className={stl.postAuthor} to='user' onClick={() => {
                           getUserByID(pst.id_author_post);
                           getPostByUserID(pst.id_author_post);
                        }}>
                           <div className={stl.createdAt}>{pst.created_at.split("T")[0].replaceAll('-', '.')}</div>
                           {pst.login}
                        </Link>

                     </div>
                  </div>)
            })}
         </div>
         {/* <div className={stl.pagination}>
            <span ></span>
            <span className={}></span>
            <span ></span>
         </div> */}
      </div>
   )
}

export default AllPosts
