import React, { useState } from 'react';

import stl from '../../styles/Settings.module.css'
const API_URL = process.env.REACT_APP_HOST;

const Settings = (props) => {
   const { addAvatar, updateUser, user, updateData } = props;

   const [updateLogin, setUpdateLogin] = useState('')
   const [updatePassword, setUpdatePassword] = useState('')
   const [updateEmail, setUpdateEmail] = useState('')

   return (
      <>
         <h1>Settings</h1>
         <div className={stl.wrappSettings}>
            <div className={stl.avatarData}>
               <img className={stl.avatar} src={`${API_URL}/avatar/${user.avatar}`} alt="New avatar" />
               <input type="file" accept='image/*' placeholder='You avatar' autoComplete="off"
                  name="avatarFile" id={stl.avatarFile}
                  onChange={e => addAvatar(e.target.files[0])}
                  className={`${stl.avatarFile}`} />
            </div>
            <div className={stl.updateData}>
               <input type='text' placeholder="updateLogin" autoComplete="off"
                  name="updateLogin" id={stl.updateLogin} value={updateLogin}
                  onChange={e => setUpdateLogin(e.target.value)}
                  className={`${stl.inp} ${stl.updateLogin}`} />

               <input type='password' placeholder="updatePassword" autoComplete="off"
                  name="updatePassword" id={stl.updatePassword} value={updatePassword}
                  onChange={e => setUpdatePassword(e.target.value)}
                  className={`${stl.inp} ${stl.updatePassword}`} />

               <input type='text' placeholder="updateEmail" autoComplete="off"
                  name="updateEmail" id={stl.updateEmail} value={updateEmail}
                  onChange={e => setUpdateEmail(e.target.value)}
                  className={`${stl.inp} ${stl.updateEmail}`} />

               <button className={stl.btnSend} onClick={() => {
                  updateUser(user.id, updateLogin, updatePassword, updateEmail)
               }}>Update data</button>
            </div>
         </div>
         <div className={stl.not}> {typeof updateData === 'string' ?
            <div className={stl.notification}>{updateData}</div> :
            <></>}</div>

      </>
   );
};

export default Settings;