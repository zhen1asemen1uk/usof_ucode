import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { authAPI } from "./API/authAPI";


const App = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
console.log(store);
  if (localStorage.getItem(`token`)) {
    store.authState.isAuth = true;
  }

  useEffect(() => {
    if (localStorage.getItem(`token`)) {
      store.authState.isAuth = true;
      authAPI.checkAuth();
    }
  }, [store]);

  if (!store.authState.isAuth) {
    return (
      <>
        <BrowserRouter>
          <header>
            <nav className='navBar'>
              <Link to="/register">register</Link>
              <Link to="/login">login</Link>
            </nav>
          </header>

          <h1>{store.authState.isAuth ?
            `User loggined :D \n ${store.authState.user.email}` :
            `Login pls!`}</h1>

          <AppRouter />
        </BrowserRouter>
      </>
    )
  }
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='navBar'>

            <Link to="/posts">posts</Link>
            <Link to="/user">user</Link>
            <Link to='/' onClick={() => { dispatch(authAPI.logout()) }}>logout</Link>
          </nav>
        </header>

        <h1>{store.authState.isAuth ?
          `User loggined :D \n ${store.authState.user.email}` :
          `Login pls!`}</h1>

        <AppRouter />
      </BrowserRouter>
    </>
  );

  // return (
  //   <>
  //     <BrowserRouter>
  //       <header>
  //         <nav className='navBar'>
  //           <Link to="/posts">posts</Link>
  //           <Link to="/user">user</Link>
  //           <Link to="/register">register</Link>
  //           <Link to="/login">login</Link>
  //           <Link to="/logout">logout</Link>
  //         </nav>
  //       </header>
  //       <AppRouter />
  //     </BrowserRouter>
  //   </>
  // )
}
export default App
