import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { authAPI } from "./API/authAPI";
import IsAuth from "./components/NavBar/IsAuth";
import NotAuth from "./components/NavBar/NotAuth";


const App = () => {
  const store = useSelector(store => store);

  if (localStorage.getItem(`token`)) {
    store.authState.isAuth = true;
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
            {store.authState.isAuth ? <IsAuth /> : <NotAuth />}
          </nav>
        </header>

        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
