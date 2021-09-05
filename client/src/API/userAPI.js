import api from '.'

export const userAPI = {
   async getAllUsers() {
      return api.get(`/api/users/`)
   },

   async getUserByID(id) {
      return api.get(`/api/users/${id}`)
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