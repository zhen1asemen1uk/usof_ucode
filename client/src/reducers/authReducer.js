import { initialState } from ".";
import { authAPI } from "../API/authAPI";
import {
   register_Type,
   verify_Type,
   login_Type,
   password_reset_Type,
   password_reset_link_Type,
   logout_Type
} from "./types";

export const authReducer = async (state = initialState, action) => {
   switch (action.type) {

      case register_Type:
         const register = await authAPI.register(
            action.payload.login,
            action.payload.password,
            action.payload.password_confirm,
            action.payload.email);
         console.log(register.data);
         return { ...state, userData: register.data }

      case login_Type:
         const login = await authAPI.login(
            action.payload.login,
            action.payload.password);
         console.log(login.data);
         return { ...state, userData: login.data }

      case verify_Type:
         const verify = authAPI.verify(action.payload.link);
         console.log(verify.data);
         return { ...state, userData: verify.data }

      case password_reset_Type:
         const password_reset = authAPI.password_reset(action.payload.login, action.payload.newPassword);
         console.log(password_reset.data);
         return { ...state, userData: password_reset.data }
         
      case password_reset_link_Type:
         const password_reset_link = authAPI.password_reset_link(action.payload.link);
         console.log(password_reset_link.data);
         return { ...state, userData: password_reset_link.data }

      case logout_Type:
         const logout = authAPI.logout();
         console.log(logout.data);
         return { ...state, userData: logout.data }

      default:
         return state
   }
}

// export const registerUser = (payload) => ({ type: register, payload });
// export const loginUser = (payload) => ({ type: login, payload });
// export const logoutUser = (payload) => ({ type: logout, payload });