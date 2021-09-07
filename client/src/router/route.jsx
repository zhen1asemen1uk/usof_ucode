import RegisterConteiner from "../components/Register/RegisterConteiner";
import LoginConteiner from "../components/Login/LoginConteiner";
import UsersConteiner from "../components/Users/UsersConteiner";
import PostsConteiner from "../components/Posts/PostsConteiner";

const routes = [
   { path: '/', component: PostsConteiner, exact: true },
   { path: '/user', component: UsersConteiner, exact: true },
   { path: '/posts', component: PostsConteiner, exact: true },
   { path: '/register', component: RegisterConteiner, exact: true },
   { path: '/login', component: LoginConteiner, exact: true },
   { path: '/logout', component: LoginConteiner, exact: true }

];
export default routes