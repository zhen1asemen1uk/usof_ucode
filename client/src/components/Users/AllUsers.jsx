import React from 'react';
import { Link } from "react-router-dom";

import { API_URL } from '../../config';
import stl from '../../styles/Users.module.css'

const AllUsers = (props) => {
   const { users, getUserByID, getPostByUserID } = props;

   return (
      <>
         <h1>Users Page</h1>
         <div className={stl.wrappUsers}>
            <div className={stl.users}>

               {users.map((user) => {
                  return (
                     <Link className={stl.linkForEveryone} to='user' onClick={() => {
                        getUserByID(user.id);
                        getPostByUserID(user.id);
                     }} key={user.id}>

                        <div className={stl.user} >
                           <img className={stl.userAvatar} src={`${API_URL}/avatar/${user.avatar}`} alt="usersAvatar" />
                           <span className={stl.userLogin}>{user.login}</span>
                        </div>

                     </Link>

                  )
               })}
            </div>
         </div>
      </>
   );
};

export default AllUsers;