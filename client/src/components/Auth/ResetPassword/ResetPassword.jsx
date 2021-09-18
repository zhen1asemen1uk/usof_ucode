import React, { useState } from 'react';

import stl from '../../../styles/ResetPass.module.css'

const ResetPassword = (props) => {
   const { password_reset, authState } = props;

   const [resetLogin, setResetLogin] = useState("");

   const passwordReset = authState.passwordReset;

   return (
      <>
         <h1>Reset password page</h1>

         <div className={stl.wrappForm}>
            <input type="text" autoComplete="off" name="login" id={stl.login}
               placeholder="login" required={true}
               maxLength={40} pattern={"[A-Za-z]+"} value={resetLogin}
               onChange={e => setResetLogin(e.target.value)}
               className={`${stl.log} ${stl.inp}`}
            />

            <button onClick={() => {
               password_reset(resetLogin)
            }} className={stl.btnSend}>Reset</button>

            {passwordReset.data ?
               <div className={stl.notification}>{passwordReset.data}</div> :
               <div></div>
            }
         </div>
      </>
   );
};

export default ResetPassword;