import axios from 'axios';
import { API_URL } from '../config';
import AuthServices from '../services/AuthServices'

class Store {
   user = {};
   isAuth = false;

   setAuth(ath) {
      this.isAuth = ath;
   }
   setUser(usr) {
      this.user = usr;
   }

   async login(login, password) {
      try {
         const res = await AuthServices.login(login, password);
         console.log(res);
         
         localStorage.setItem('token', res.data.accessToken);
         this.setAuth(true);
         this.setUser(res.data.user);

      } catch (error) {
         console.log(error);
      }
   }

   async register(login, password, password_confirm, email) {
      try {
         const res = await AuthServices.register(login, password, password_confirm, email);
         console.log(res);
         // localStorage.setItem('token', res.data.accessToken);
         // this.setAuth(true);
         // this.setUser(res.data.user);

      } catch (error) {
         console.log(error);
      }
   }

   async logout() {
      try {
         const res = await AuthServices.logout();
         console.log(res);
         localStorage.removeItem('token');
         this.setAuth(false);
         this.setUser({});

      } catch (error) {
         console.log(error);
      }
   }

   async checkAuth(){
      try {
         const res = await axios.get(`${API_URL}/api/`)/////////!!!!!!!!!!!!!!
      } catch (e) {
         console.log(e);
      }
   }
}
export default Store