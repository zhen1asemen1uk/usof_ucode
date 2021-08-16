import React, { useState } from 'react';


const LoginPage = () => {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");

   // const addUser = (e) => {
   //    e.preventDefault();
   // }

   return (
      <>
         <h1>LoginPage Page</h1>

         <form action="/api/auth/login" method="post">

            <input type="text" name="login" id="login"
               placeholder="Login" autoFocus required={true}
               maxLength={18} pattern={"[A-Za-z]+"} value={login}
               onChange={e => setLogin(e.target.value)}
            />

            <input type="password" name="password" id="password"
               placeholder="Password" minLength={8} required={true}
               maxLength={18} value={password} onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" onClick={addUser}>Login</button>
         </form>
      </>
   )
};

export default LoginPage;