import React from 'react';
import { API_URL } from '../../config';

const AllUsers = (props) => {

   const { users } = props;

   return (
      <>
         <h1>User Page</h1>
         <div className='wrappUsers'>
            <div className='users'>
               {users.map((user) => {
                  return (
                     <div className='user' key={user.id}>
                        <img className='userAvatar' src={`${API_URL}/avatar/${user.avatar}`} alt="usersAvatar" />
                        <span className='userLogin'>{user.login}</span>
                        <span className='userID'>{user.id}</span>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   );
};

export default AllUsers;