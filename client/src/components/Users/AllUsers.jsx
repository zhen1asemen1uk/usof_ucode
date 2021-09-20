import React from 'react';
import { Link } from "react-router-dom";

import stl from '../../styles/Users.module.css'

const API_URL = process.env.REACT_APP_API_URL;

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