import React, { useState } from 'react';
import stl from '../../styles/Login.module.css'

const Login = (props) => {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");

   return (
      <>
         <h1>Login Page</h1>
         <div className={stl.wrappFormLog}>
            <input type="text" name="login" id={stl.login}
               placeholder="Login" autoFocus required={true}
               maxLength={18} pattern={"[A-Za-z]+"} value={login}
               onChange={e => setLogin(e.target.value)}
               className={`${stl.log} ${stl.inp}`}
            />

            <input type="password" name="password" id={stl.password}
               placeholder="Password" minLength={8} required={true}
               maxLength={18} value={password}
               onChange={e => setPassword(e.target.value)}
               className={`${stl.pass} ${stl.inp}`}
            />

            <button onClick={() => {
               props.sendLoginData(login, password)
            }} className={stl.btnSend}>Login</button>
         </div>
      </>
   )
};

export default Login;