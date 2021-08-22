import api from "../API/login";

class AuthServices {

   static async login(login, password) {
      return api.post('/api/auth/login', { login: login, password: password })
   }

   static async register(login, password, password_confirm, email) {
      return api.post('/api/auth/register', { login: login, password: password, password_confirm: password_confirm, email: email })
   }

   static async logout() {
      return api.post('/api/auth/logout')
   }
}

export default AuthServices