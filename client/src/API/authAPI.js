import api from '.'

export const authAPI = {
   async login(login, password) {
      return api.post(`/api/auth/login`, {
         login: login,
         password: password
      })
   },

   async register(login, password, password_confirm, email) {
      return api.post(`/api/auth/register`, {
         login: login, password: password,
         password_confirm: password_confirm,
         email: email
      })
   },

   async verify(link) {
      return api.get(`/activate/${link}`)
   },

   async password_reset(login, newPassword) {
      return api.post(`/api/auth/password-reset`, {
         login: login,
         newPassword: newPassword
      });
   },

   async password_reset_link(link) {
      return api.post(`/api/auth/password-reset/${link}`)
   },
   
   async logout() {
      return api.post(`/api/auth/logout`)
   }
}