import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles/App.css";

// import Context from "./index";
import AppRouter from "./components/AppRouter";



const App = () => {

  // const { store } = useContext(Context);

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
            <Link to="/feed">feed</Link>
            <Link to="/user_page">user</Link>
            <Link to="/register_page">register</Link>
            <Link to="/login_page">login</Link>
          </nav>
        </header>
        {/* <h1>{store.isAuth?`User loggined! ${store.user.email}`:`User not login!`}</h1> */}
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
export default App
