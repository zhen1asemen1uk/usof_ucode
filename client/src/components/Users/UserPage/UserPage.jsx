import React from 'react';

const API_URL = process.env.REACT_APP_API_URL;

import NoneUsers from '../NoneUsers';

import stl from '../../../styles/Users.module.css'
import AllPosts from '../../Posts/AllPosts';

const UserPage = (props) => {
   const { userPage, posts, getPostByUserID, getUserByID } = props;

   const userPosts = () => {
      getPostByUserID(userPage[0].id);
   }

   if (userPage.length > 0) {
      return (
         <>
            <div className={stl.wrappUserPage}>
               <div className={stl.userData}>
                  <img className={stl.avatarUser} src={`${API_URL}/avatar/${userPage[0].avatar}`} alt="avatar" />

                  <h3>Data:</h3>
                  <div className={stl.loginUser}><strong>Login:</strong> {userPage[0].login}</div>
                  <div className={stl.emailUser}><strong>Email:</strong> {userPage[0].email}</div>
                  <div className={stl.statusUser}><strong>Status:</strong> {userPage[0].status}</div>
               </div>
               <div className={stl.postsData}>

                  <h2>Posts:</h2>
                  {posts.length > 0 ?
                     <AllPosts postsData={posts} getPostByUserID={getPostByUserID} getUserByID={getUserByID} /> :
                     <button className={stl.btnPosts} onClick={() => {
                        userPosts();
                     }}>Sorry i was late 😵‍💫 click on me for more posts...</button>}

               </div>
            </div>
         </>
      )
   }
   return <NoneUsers />
};

export default UserPage;