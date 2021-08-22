import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles/App.css";

import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='navBar'>
            <Link to="/feed">feed</Link>
            <Link to="/user_page">user</Link>
            <Link to="/register_page">register</Link>
            <Link to="/login_page">login</Link>
          </nav>
        </header>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
export default App
