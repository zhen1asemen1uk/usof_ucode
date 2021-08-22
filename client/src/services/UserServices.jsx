import api from "../API/login";

class AuthServices {
   static async login(login, password) {
      return api.post('/api/auth/login', { login: login, password: password })
   }

}

export default AuthServices