import React from 'react';
import AllUsers from './AllUsers';
import NoneUsers from './NoneUsers';

export const Users = (props) => {

   const { userState, getUserByID, getPostByUserID } = props;  
   if (userState.users.length > 0) {
      return <AllUsers users={userState.users} getUserByID={getUserByID} getPostByUserID={getPostByUserID} />
   }
   return <NoneUsers />
};
export default Users;