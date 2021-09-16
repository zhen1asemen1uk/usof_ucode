import RegisterConteiner from "../components/Register/RegisterConteiner";
import LoginConteiner from "../components/Login/LoginConteiner";
import PostsConteiner from "../components/Posts/PostsConteiner";
import UsersConteiner from "../components/Users/UsersConteiner";
import UserPageConteiner from "../components/Users/UserPage/UserPageConteiner";

const routes = [
   { path: '/', component: LoginConteiner, exact: true },
   { path: '/users', component: UsersConteiner, exact: true },
   { path: '/posts', component: PostsConteiner, exact: true },
   { path: '/register', component: RegisterConteiner, exact: true },
   { path: '/login', component: LoginConteiner, exact: true },
   { path: '/logout', component: LoginConteiner, exact: true },
   { path: '/user', component: UserPageConteiner, exact: true }

];
export default routes