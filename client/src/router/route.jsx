import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import UserPage from "../components/UserPage";
import FeedPage from "../components/FeedPage";

const routes = [
   { path: '/', component: FeedPage, exact: true },
   { path: '/register_page', component: RegisterPage, exact: true },
   { path: '/login_page', component: LoginPage, exact: true },
   { path: '/user_page', component: UserPage, exact: true },
   { path: '/feed', component: FeedPage, exact: true }

];
export default routes