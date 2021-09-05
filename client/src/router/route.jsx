import Register from "../components/Register";
import Login from "../components/Login";
import User from "../components/User";
import Posts from "../components/Posts";

const routes = [
   { path: '/', component: Posts, exact: true },
   { path: '/user', component: User, exact: true },
   { path: '/posts', component: Posts, exact: true },
   { path: '/register', component: Register, exact: true },
   { path: '/login', component: Login, exact: true },
   { path: '/logout', component: Login, exact: true }

];
export default routes