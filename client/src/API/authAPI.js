import axios from 'axios';
import api from '.'
import { API_URL } from '../config';
import { login_Auth, logout_Auth, register_Auth } from '../reducers/authReducer/authReducer';

export const authAPI = {


   register(login, password, password_confirm, email) {
      return async function (dispatch) {
         try {
            const dataRegister = await api.post(`/api/auth/register`, {
               login: login, password: password,
               password_confirm: password_confirm,
               email: email
            })

            return dispatch(register_Auth(dataRegister));
         } catch (error) {
            console.log(`Error register ${error}`);
         }

      }
   },

   login(login, password) {
      return async function (dispatch) {
         try {
            const dataLogin = await api.post(`/api/auth/login`, {
               login: login,
               password: password
            })
            return dispatch(login_Auth(dataLogin));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         }

      }
   },

   verify(link) {
      return api.get(`/activate/${link}`)
   },

   password_reset(login, newPassword) {
      return api.post(`/api/auth/password-reset`, {
         login: login,
         newPassword: newPassword
      });
   },

   password_reset_link(link) {
      return api.post(`/api/auth/password-reset/${link}`)
   },

   logout() {
      return async (dispatch) => {
         try {
            const dataLogout = await api.post(`/api/auth/logout`);

            return dispatch(logout_Auth(dataLogout))
         } catch (error) {
            console.log(`Error logout ${error}`);
         }

      }
   },

   async checkAuth() {
      try {
         
         const check = await axios.get(`${API_URL}/api/auth/refresh`,
         {withCredentials:true});

         localStorage.setItem('token', check.data.accessToken);
      } catch (error) {
         console.log(`Error check refresh ${error}`);
      }finally{

      }
   }
}