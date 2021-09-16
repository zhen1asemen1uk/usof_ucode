import axios from 'axios';
import api from '.'
import { API_URL } from '../config';
import { login_Auth, logout_Auth, password_reset_Auth, register_Auth } from '../reducers/authReducer/authReducer';

export const authAPI = {


   register(login, password, password_confirm, email) {
      return async function (dispatch) {
         try {
            const dataRegister = await api.post(`/api/auth/register`, {
               login: login, password: password,
               password_confirm: password_confirm,
               email: email
            })

            return dispatch(register_Auth(dataRegister.data));
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
      return async function (dispatch) {
         try {
            const resetData = await api.post(`/api/auth/password-reset`, {
               login: login,
               newPassword: newPassword
            });
            return dispatch(password_reset_Auth(resetData));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         }
      }
   },

   password_reset_link(token, newPass) {
      return async function (dispatch) {
         try {
            const resetData = await api.post(`/api/auth/password-reset/${token}`, {
               newPassword: newPass
            });
            return dispatch(password_reset_Auth(resetData));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         }
      }
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
         const check = await axios.get(`

         ${API_URL}/api/auth/refresh`,
            { withCredentials: true });

         localStorage.setItem('token', check.data.accessToken);

         const obj = JSON.stringify(check.data.user)
         localStorage.setItem('userData', obj);

      } catch (error) {
         console.log(`Error check refresh ${error}`);
      } finally {

      }
   }
}