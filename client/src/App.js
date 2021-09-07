import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles/App.css";

import AppRouter from "./components/AppRouter";


const App = () => {
  const store = useSelector(store => store)
  // console.log(store);
  // const dispatch = useDispatch();
  // const cash = useSelector(cash => cash.cash)

  // const addCash = (cash) => {
  //   dispatch({ type: 'Add state', payload: cash })
  // }


  //   useEffect(() => {
  //     if (localStorage.getItem(`token`)) {
  //       store.checkAuth();
  //     }
  //   }, [store]);




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
            `User loggined :D \n ${store.authState.userData.email}` :
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
            <Link to="/logout">logout</Link>
          </nav>
        </header>
        <h1>{store.authState.isAuth ?
          `User loggined :D \n ${store.authState.userData.email}` :
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
