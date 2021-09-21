import React, { useState } from 'react';

import stl from '../../../styles/ResetPass.module.css'

const CreateNewPass = (props) => {
   const { password_reset, passwordReset } = props;
   
   const [resetPassword, setResetPassword] = useState("");
   
   const token = window.location.pathname.split('/')[2];
   
   return (
      <div className={stl.wrappForm}>
         <h1>Creating new password ⏳</h1>
         <input type="password" name="password" id={stl.password}
            placeholder="new password" value={resetPassword}
            onChange={e => setResetPassword(e.target.value)}
            className={`${stl.pass} ${stl.inp}`}
         />

         <button onClick={() => {
            password_reset(token, resetPassword)
         }} className={stl.btnSend}>Reset</button>
         {passwordReset.data ?
            <div className={stl.notification}>{ passwordReset.data}</div> :
            <div></div>
         }
      </div>
   );
};

export default CreateNewPass;