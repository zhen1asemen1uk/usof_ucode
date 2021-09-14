import React from 'react';
import AllUsers from './AllUsers';
import NoneUsers from './NoneUsers';
import UserPage from './UserPage';

export const Users = (props) => {

   const { userState } = props;

   <UserPage userState={userState} />

   if (userState.users.length > 0) {
      return <AllUsers users={userState.users} />
   }
   return <NoneUsers />
};
export default Users;