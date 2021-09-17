import api from '.'
import { addAvatar_User, getAllUsers_User, getUserByID_User, updateUser_User } from '../reducers/userReducer/userReducer';

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

    registerForADMIN(
      login, password,
      password_confirm,
      email, status, verify) {
      return api.post(`/api/users/`, {
         login: login, password: password,
         password_confirm: password_confirm,
         email: email, status: status, verify: verify
      })
   },

    addAvatar(ava) {
      return async (dispatch) => {
         try {
            const formData = new FormData();
            formData.append('ava', ava);

            const updateData = await api.patch(`/api/users/avatar`, formData);
            return dispatch(addAvatar_User(updateData.data));
         } catch (error) {
            console.log(error);
         }
      }
   },

    updateUser(id, login, password, email) {
       return async (dispatch) => {
          const updateData = await api.patch(`/api/users/${id}`, {
             login: login, password: password, email: email
          })
          return dispatch(updateUser_User(updateData.data));
       }
   },

    deleteUser(id) {
      return api.delete(`/api/users/${id}`);
   }
}