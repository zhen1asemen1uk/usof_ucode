import api from '.'
import { login_Auth, logout_Auth, register_Auth } from '../reducers/authReducer/authReducer';

export const authAPI = {


   register(login, password, password_confirm, email) {
      return async function (dispatch) {
         const dataRegister = await api.post(`/api/auth/register`, {
            login: login, password: password,
            password_confirm: password_confirm,
            email: email
         })

         return dispatch(register_Auth(dataRegister));
      }
   },

   login(login, password) {
      return async function (dispatch) {
         const dataLogin = await api.post(`/api/auth/login`, {
            login: login,
            password: password
         })

         return dispatch(login_Auth(dataLogin));
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
      return async function (dispatch) {
         const dataLogout = await api.post(`/api/auth/logout`)
         console.log(dataLogout);
         return dispatch(logout_Auth(dataLogout));
      }




      // return api.post(`/api/auth/logout`)
   }
}