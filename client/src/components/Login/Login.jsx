import React, { useState } from 'react';

const Login = (props) => {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
  
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

         <button onClick={() => {
             props.sendLoginData(login,password)
         }} >Login</button>
      </>
   )
}; 

export default Login;