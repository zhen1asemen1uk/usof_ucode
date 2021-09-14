import React from 'react';
import { API_URL } from '../../config';

const AllUsers = (props) => {

   const { users } = props;
   console.log(users);
   return (
      <>
         <h1>User Page</h1>
         <div className='wrappUsers'>
            <div className='users'>
               {users.map((user) => {
                  // `${API_URL}/avatar/${user.avatar}`
                  return (
                     <div className='user' key={user.email}>
                        <img className='userAvatar' src={`${API_URL}/avatar/${user.avatar}`} alt="avatar" />
                        <span className='userLogin'>{user.login}</span>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   );
};

export default AllUsers;