import api from "../API/login";

class AuthServices {

   static async register(login, password, password_confirm, email) {
      return api.post('/api/auth/register', { login: login, password: password, password_confirm: password_confirm, email: email })
   }

   static async verify(link) {
      return api.get(`/activate/${link}`)
   }

   static async login(login, password) {
      return api.post('/api/auth/login', { login: login, password: password })
   }

   static async password_reset(login, newPassword) {
      return api.post(`/api/auth/password-reset`, { login: login, newPassword: newPassword });
   }

   static async password_reset_link(link) {
      return api.post(`/api/auth/password-reset/${link}`)
   }

   static async logout() {
      return api.post('/api/auth/logout')
   }
}

export default AuthServices