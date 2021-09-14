import { authAPI } from "../../API/authAPI";
import {
   register_Type,
   verify_Type,
   login_Type,
   password_reset_Type,
   password_reset_link_Type,
   logout_Type
} from "./types";

export const initialState = {
   user: {},
   isAuth: false,
   isLoading: false
}

export const authReducer = (state = initialState, action) => {
   switch (action.type) {

      case register_Type:
         const register = authAPI.register(
            action.payload.login,
            action.payload.password,
            action.payload.password_confirm,
            action.payload.email);

         return { ...state, user: register.data }

      case login_Type:
         if (typeof action.payload.data == "object") {
            localStorage.setItem('token', action.payload.data.accessToken);

            const obj = JSON.stringify(action.payload.data.user);
            localStorage.setItem('userData', obj);

            state.isAuth = true;
            return { ...state, user: action.payload.data.user }
         }
         return { ...state, user: action.payload.data }
         

      case verify_Type:
         const verify = authAPI.verify(action.payload.link);

         console.log(verify.data);
         return { ...state, user: verify.data }

      case password_reset_Type:
         const password_reset = authAPI.password_reset(
            action.payload.login, action.payload.newPassword);

         console.log(password_reset.data);
         return { ...state, user: password_reset.data }

      case password_reset_link_Type:
         const password_reset_link = authAPI.password_reset_link(action.payload.link);

         console.log(password_reset_link.data);
         return { ...state, user: password_reset_link.data }

      case logout_Type:
         state.isAuth = false;
         localStorage.removeItem('token');
         localStorage.removeItem('userData');
         return { ...state, user: {} }

      default:
         return state
   }
}

export const register_Auth = (payload) => ({ type: register_Type, payload });
export const verify_Auth = (payload) => ({ type: verify_Type, payload });
export const login_Auth = (payload) => ({ type: login_Type, payload });
export const password_reset_Auth = (payload) => ({ type: password_reset_Type, payload });
export const password_reset_link_Auth = (payload) => ({ type: password_reset_link_Type, payload });
export const logout_Auth = (payload) => ({ type: logout_Type, payload });