import React from 'react';
import { API_URL } from '../../config';

const UserPage = (props) => {

   const { userState } = props;

   return (
      <>
         <div className='wrappUser'>
            <img src={`${API_URL}/avatar/${userState.avatar}`} alt="avatar" />
            <div className='loginU'>{userState.login}</div>
            <div className='emailU'>{userState.email}</div>
            <div className='veryfiU'>{userState.veryfi}</div>
            <div className='statusU'>{userState.status}</div>
         </div>
      </>
   );
};

export default UserPage;