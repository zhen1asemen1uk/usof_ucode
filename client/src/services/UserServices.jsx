import api from "../API/login";

class UserServices {

   static async getAllUsers() {
      return api.get(`/api/users/`)
   }

   static async getUserByID(id) {
      return api.get(`/api/users/${id}`)
   }

   static async registerForADMIN(
      login, password,
      password_confirm,
      email, status, verify
   ) {
      return api.post(`/api/users/`, {
         login: login, password: password,
         password_confirm: password_confirm,
         email: email, status: status, verify: verify
      })
   }

   static async addAvatar(ava) {
      return api.patch(`/api/users/avatar`, { ava: ava })
   }

   static async updateUser(id, login, password, email) {
      return api.patch(`/api/users/${id}`, {
         login: login, password: password, email: email
      })
   }

   static async deleteUser(id) {
      return api.delete(`/api/users/${id}`);
   }
}

export default UserServices