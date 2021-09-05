import { initialState } from ".";
import { userAPI } from "../API/userAPI";
import {
   getAllUsers_Type,
   getUserByID_Type,
   registerForADMIN_Type,
   addAvatar_Type,
   updateUser_Type,
   deleteUser_Type
} from "./types";


export const userReducer = async (state = initialState, action) => {
   switch (action.type) {

      case getAllUsers_Type:
         const getAllUsers = await userAPI.getAllUsers();
         console.log(getAllUsers);
         return { ...state, users: getAllUsers }

      case getUserByID_Type:
         const getUserByID = await userAPI.getUserByID(action.payload.id);
         console.log(getUserByID);
         return { ...state, users: getUserByID }

      case registerForADMIN_Type:
         const registerForADMIN = await userAPI.registerForADMIN(
            action.payload.login,
            action.payload.password,
            action.payload.password_confirm,
            action.payload.email,
            action.payload.status,
            action.payload.verify)
         console.log(registerForADMIN);
         return { ...state, users: registerForADMIN }

      case addAvatar_Type:
         const addAvatar = await userAPI.addAvatar(action.payload.ava);
         console.log(addAvatar);
         return { ...state, users: addAvatar }

      case updateUser_Type:
         const updateUser = await userAPI.updateUser(
            action.payload.id,
            action.payload.login,
            action.payload.password,
            action.payload.email)
         console.log(updateUser);
         return { ...state, users: updateUser }

      case deleteUser_Type:
         const deleteUser = await userAPI.deleteUser(action.payload.id)
         console.log(deleteUser);
         return { ...state, users: deleteUser }

      default:
         return state

   }
}




