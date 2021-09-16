import api from '.'
import { getAllUsers_User, getUserByID_User } from '../reducers/userReducer/userReducer';

export const userAPI = {
   getAllUsers() {
      return async (dispatch) => {
         const usersData = await api.get(`/api/users/`);
         return dispatch(getAllUsers_User(usersData.data));
      }
   },

   getUserByID(id) {
      return async (dispatch) => {
         const usersData = await api.get(`/api/users/${id}`);
         return dispatch(getUserByID_User(usersData.data));
      }
   },

   async registerForADMIN(
      login, password,
      password_confirm,
      email, status, verify) {
      return api.post(`/api/users/`, {
         login: login, password: password,
         password_confirm: password_confirm,
         email: email, status: status, verify: verify
      })
   },

   async addAvatar(ava) {
      return api.patch(`/api/users/avatar`, { ava: ava })
   },

   async updateUser(id, login, password, email) {
      return api.patch(`/api/users/${id}`, {
         login: login, password: password, email: email
      })
   },

   async deleteUser(id) {
      return api.delete(`/api/users/${id}`);
   }
}