import axios from 'axios';
import { verify } from 'jsonwebtoken';
import api from '.'
import {
   isLoading_Auth, login_Auth, logout_Auth,
   password_reset_Auth, register_Auth
} from '../reducers/authReducer/authReducer';

const API_URL = process.env.REACT_APP_HOST;

export const authAPI = {


   register(login, password, password_confirm, email) {
      return async function (dispatch) {
         try {
            dispatch(isLoading_Auth(true));
            const dataRegister = await api.post(`/api/auth/register`, {
               login: login, password: password,
               password_confirm: password_confirm,
               email: email
            })

            return dispatch(register_Auth(dataRegister.data));
         } catch (error) {
            console.log(`Error register ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }

      }
   },

   login(login, password) {
      return async function (dispatch) {
         try {
            dispatch(isLoading_Auth(true));
            const dataLogin = await api.post(`/api/auth/login`, {
               login: login,
               password: password
            })
            return dispatch(login_Auth(dataLogin));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   verify(link) {
      return async function (dispatch) {
         try {
            dispatch(isLoading_Auth(true));
            const dataLogin = await api.get(`/activate/${link}`)
            return dispatch(verify(dataLogin));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   password_reset(login, newPassword) {
      return async function (dispatch) {
         try {
            dispatch(isLoading_Auth(true));
            const resetData = await api.post(`/api/auth/password-reset`, {
               login: login,
               newPassword: newPassword
            });
            return dispatch(password_reset_Auth(resetData));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   password_reset_link(token, newPass) {
      return async function (dispatch) {
         try {
            dispatch(isLoading_Auth(true));
            const resetData = await api.post(`/api/auth/password-reset/${token}`, {
               newPassword: newPass
            });
            return dispatch(password_reset_Auth(resetData));
         }
         catch (error) {
            console.log(`Error login ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   logout() {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataLogout = await api.post(`/api/auth/logout`);

            return dispatch(logout_Auth(dataLogout))
         } catch (error) {
            console.log(`Error logout ${error}`);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   checkAuth() {
      return async () => {
         try {
            const check = await axios.get(`

         ${API_URL}/api/auth/refresh`,
               { withCredentials: true });

            localStorage.setItem('token', check.data.accessToken);

            const obj = JSON.stringify(check.data.user)
            localStorage.setItem('userData', obj);

         } catch (error) {
            console.log(`Error check refresh ${error}`);
         }
      }
   }
}