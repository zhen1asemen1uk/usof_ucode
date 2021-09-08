import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";


import routes from '../router/route';


const AppRouter = () => {
   const store = useSelector(store => store);

   return (
      <>
         <h1>{store.authState.isAuth ?
            `User loggined :D \n ${store.authState.user.email}` :
            `Login pls!`}</h1>
         <Switch>
            {routes.map((route) =>
               <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />      //key!!!!
            )}

            <Redirect to="/" />

         </Switch>

      </>
   )
}

export default AppRouter