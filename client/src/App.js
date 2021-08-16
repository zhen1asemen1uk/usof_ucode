import React from "react";
import "./styles/App.css";

import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
  <>
    <header>
      <nav className='navBar'>
        <div>register</div>
        <div>login</div>
      </nav>
    </header>
    <h1>Hello world!</h1>
    <RegisterPage/>
    <LoginPage/>
    <UserPage/>

  </>
  );
}

export default App;
