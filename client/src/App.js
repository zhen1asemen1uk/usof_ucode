import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles/App.css";

// import Context from "./index";
import AppRouter from "./components/AppRouter";



const App = () => {

  // const { store } = useContext(Context);//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // useEffect(() => {
  //   if (localStorage.getItem(`token`)) {
  //     store.checkAuth();
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='navBar'>
            <Link to="/posts">posts</Link>
            <Link to="/user">user</Link>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
          </nav>
        </header>
        {/* <h1>{store.isAuth?`User loggined! ${store.user.email}`:`User not login!`}</h1> */}
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
export default App
