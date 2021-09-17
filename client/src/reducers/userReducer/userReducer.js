import {
   getAllUsers_Type,
   getUserByID_Type,
   registerForADMIN_Type,
   addAvatar_Type,
   updateUser_Type,
   deleteUser_Type
} from "./types";

export const initialState = {
   users: [],
   userPage: [],
   updateData: [],
   deletedData:[]
}

export const userReducer = (state = initialState, action) => {
   switch (action.type) {

      case getAllUsers_Type:
         return { ...state, users: action.payload }

      case getUserByID_Type:
         return { ...state, userPage: action.payload }

      case registerForADMIN_Type:
         console.log(action.payload);
         return { ...state }

      case addAvatar_Type:
         return { ...state, updateData: action.payload }

      case updateUser_Type:
         console.log(action.payload);
         return { ...state, updateData: action.payload }

      case deleteUser_Type:
         console.log(action.payload);
         return { ...state, deletedData: action.payload }

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


