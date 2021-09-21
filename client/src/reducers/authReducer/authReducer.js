import { authAPI } from "../../API/authAPI";
import {
   register_Type,
   verify_Type,
   login_Type,
   password_reset_Type,
   password_reset_link_Type,
   logout_Type,
   isLoading_Type
} from "./types";

export const initialState = {
   user: {},
   passwordReset: {},
   isAuth: false,
   isLoading: false
}
export const authReducer = (state = initialState, action) => {
   switch (action.type) {

      case register_Type:
         console.log(action.payload );
         return { ...state, user: action.payload }

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
         return { ...state, passwordReset: action.payload }

      case password_reset_link_Type:
         const password_reset_link = authAPI.password_reset_link(action.payload.link);

         return { ...state, user: password_reset_link.data }

      case logout_Type:
         state.isAuth = false;

         document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         localStorage.removeItem(`token`);
         localStorage.removeItem(`userData`);
         return { ...state, user: {} }

      case isLoading_Type:
         return { ...state, isLoading: action.payload }

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
export const isLoading_Auth = (payload) => ({ type: isLoading_Type, payload });