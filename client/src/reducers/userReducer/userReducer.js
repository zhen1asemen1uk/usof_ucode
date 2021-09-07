import { userAPI } from "../../API/userAPI";
import {
   getAllUsers_Type,
   getUserByID_Type,
   registerForADMIN_Type,
   addAvatar_Type,
   updateUser_Type,
   deleteUser_Type
} from "./types";

export const initialState = {
   users: null
}

export const userReducer =  (state = initialState, action) => {
   switch (action.type) {

      case getAllUsers_Type:
         const getAllUsers = userAPI.getAllUsers();

         console.log(getAllUsers);
         return { ...state, users: getAllUsers }

      case getUserByID_Type:
         const getUserByID = userAPI.getUserByID(action.payload.id);

         console.log(getUserByID);
         return { ...state, users: getUserByID }

      case registerForADMIN_Type:
         const registerForADMIN = userAPI.registerForADMIN(
            action.payload.login,
            action.payload.password,
            action.payload.password_confirm,
            action.payload.email,
            action.payload.status,
            action.payload.verify)

         console.log(registerForADMIN);
         return { ...state, users: registerForADMIN }

      case addAvatar_Type:
         const addAvatar = userAPI.addAvatar(action.payload.ava);

         console.log(addAvatar);
         return { ...state, users: addAvatar }

      case updateUser_Type:
         const updateUser = userAPI.updateUser(
            action.payload.id,
            action.payload.login,
            action.payload.password,
            action.payload.email)

         console.log(updateUser);
         return { ...state, users: updateUser }

      case deleteUser_Type:
         const deleteUser = userAPI.deleteUser(action.payload.id)

         console.log(deleteUser);
         return { ...state, users: deleteUser }

      default:
         return state

   }
}


export const getAllUsers_User = (payload) => ({ type: getAllUsers_Type, payload });
export const getUserByID_User = (payload) => ({ type: getUserByID_Type, payload });
export const registerForADMIN_User = (payload) => ({ type: registerForADMIN_Type, payload });
export const addAvatar_User = (payload) => ({ type: addAvatar_Type, payload });
export const updateUser_User = (payload) => ({ type: updateUser_Type, payload });
export const deleteUser_User = (payload) => ({ type: deleteUser_Type, payload });


