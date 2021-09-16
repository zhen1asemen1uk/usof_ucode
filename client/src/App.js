import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import IsAuth from "./components/NavBar/IsAuth";
import NotAuth from "./components/NavBar/NotAuth";

import { authAPI } from "./API/authAPI";

import "./styles/App.css";


const App = () => {
  const store = useSelector(store => store);
  const user = useSelector(store => store.authState.user);

  //for true auth status
  if (localStorage.getItem(`token`) && localStorage.getItem(`token`) !== 'undefined') {
    store.authState.isAuth = true;
  }

  //for save avatar after refresh page
  if (localStorage.getItem(`userData`) && localStorage.getItem(`userData`) !== 'undefined') {
    const obj = JSON.parse(localStorage.getItem(`userData`))
    store.authState.user = obj;
  }

  useEffect(() => {
    if (localStorage.getItem(`token`)) {
      authAPI.checkAuth();
    }
  }, [store]);

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='navBar'>
            {store.authState.isAuth ? <IsAuth user={user} /> : <NotAuth />}
          </nav>
        </header>

        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
