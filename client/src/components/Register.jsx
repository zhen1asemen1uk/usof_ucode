import React, { useContext, useState } from 'react';

import Context from '..';

export const RegisterPage = () => {

   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [password_confirm, setPassword_confirm] = useState("");

   const { store } = useContext(Context);

   return (
      <>
         <h1>Register Page</h1>

         <input type="text" name="login" id="login"
            placeholder="Login" autoFocus required={true}
            maxLength={18} pattern={"[A-Za-z]+"} value={login}
            onChange={e => setLogin(e.target.value)}
         />

         <input type="password" name="password" id="password"
            placeholder="Password" minLength={8} required={true}
            maxLength={18} value={password} onChange={e => setPassword(e.target.value)}
         />

         <input type="password" name="password_confirm" id="password_confirm"
            placeholder="Password confirm" minLength={8} required={true}
            value={password_confirm} onChange={e => setPassword_confirm(e.target.value)}
         />

         <input type="email" name="email" id="email"
            placeholder="Email" required={true} maxLength={50}
            value={email} onChange={e => setEmail(e.target.value)}
         />

         <button onClick={
            () => { store.register(login, password, password_confirm, email) }
         } > 
            Create
         </button>
      </ >
   )
};

export default RegisterPage;