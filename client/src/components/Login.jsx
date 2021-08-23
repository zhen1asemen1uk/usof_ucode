import React, { useContext, useState } from 'react';

import Context from '..';


const LoginPage = () => {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");

   const { store } = useContext(Context)

   return (
      <>
         <h1>Login Page</h1>
         <input type="text" name="login" id="login"
            placeholder="Login" autoFocus required={true}
            maxLength={18} pattern={"[A-Za-z]+"} value={login}
            onChange={e => setLogin(e.target.value)}
         />

         <input type="password" name="password" id="password"
            placeholder="Password" minLength={8} required={true}
            maxLength={18} value={password} onChange={e => setPassword(e.target.value)}
         />

         <button onClick={() => { store.login(login, password) }} >Login</button>
      </>
   )
};

export default LoginPage;