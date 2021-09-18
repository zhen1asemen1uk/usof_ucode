import LoginConteiner from "../components/Auth/Login/LoginConteiner";
import PostsConteiner from "../components/Posts/PostsConteiner";
import UsersConteiner from "../components/Users/UsersConteiner";
import RegisterConteiner from "../components/Auth/Register/RegisterConteiner";
import UserPageConteiner from "../components/Users/UserPage/UserPageConteiner";
import ResetPasswordConteiner from "../components/Auth/ResetPassword/ResetPasswordConteiner";
import CreateNewPassConteiner from "../components/Auth/ResetPassword/CreateNewPassConteiner";
import SettingsConteiner from "../components/NavBar/SettingsConteiner";
import FilterPostsConteiner from "../components/Posts/FilterPostsConteiner";

const routes = [
   { path: '/', component: LoginConteiner, exact: true },
   { path: '/users', component: UsersConteiner, exact: true },
   { path: '/posts', component: PostsConteiner, exact: true },
   { path: '/register', component: RegisterConteiner, exact: true },
   { path: '/login', component: LoginConteiner, exact: true },
   { path: '/logout', component: LoginConteiner, exact: true },
   { path: '/user', component: UserPageConteiner, exact: true },
   { path: '/setting', component: SettingsConteiner, exact: true },
   { path: '/resetPassword', component: ResetPasswordConteiner, exact: true },
   { path: '/createNewPassword', component: CreateNewPassConteiner, exact: false },
   { path: '/filterPosts', component: FilterPostsConteiner, exact: true }

];
export default routes