import { initialState } from ".";
import { authAPI } from "../API/authAPI";
import {
   register_Type, login_Type, logout_Type
} from "./types";

export const authReducer = async (state = initialState, action) => {
   switch (action.type) {

      case register_Type:
         const reg = await authAPI.register(action.payload.login,
            action.payload.password,
            action.payload.password_confirm,
            action.payload.email);
         console.log(reg.data);
         return { ...state, userData: reg.data }

      case login_Type:
         const log = await authAPI.login(action.payload.login, action.payload.password);
         console.log(log.data);
         return { ...state, userData: log.data }

      case logout_Type:
         const out = authAPI.logout();
         console.log(out.data);
         return { ...state, userData: out.data }

      default:
         return state
   }
}

// export const registerUser = (payload) => ({ type: register, payload });
// export const loginUser = (payload) => ({ type: login, payload });
// export const logoutUser = (payload) => ({ type: logout, payload });