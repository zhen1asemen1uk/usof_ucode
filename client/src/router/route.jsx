import LoginConteiner from "../components/Login/LoginConteiner";
import PostsConteiner from "../components/Posts/PostsConteiner";
import UsersConteiner from "../components/Users/UsersConteiner";
import Settings from "../components/NavBar/Settings";
import RegisterConteiner from "../components/Register/RegisterConteiner";
import UserPageConteiner from "../components/Users/UserPage/UserPageConteiner";

const routes = [
   { path: '/', component: LoginConteiner, exact: true },
   { path: '/users', component: UsersConteiner, exact: true },
   { path: '/posts', component: PostsConteiner, exact: true },
   { path: '/register', component: RegisterConteiner, exact: true },
   { path: '/login', component: LoginConteiner, exact: true },
   { path: '/logout', component: LoginConteiner, exact: true },
   { path: '/user', component: UserPageConteiner, exact: true },
   { path: '/setting', component: Settings, exact: true }

];
export default routes