import { initialState } from ".";
import { categoryAPI } from "../API/categoryAPI";
import {
   getAllCategories_Type, getDataCategoryByID_Type, getPostsByCategotyID_Type,
   addCategory_Type, updateCategory_Type, deleteCategory_Type
} from "./types";

export const categoryReducer = async (state = initialState, action) => {
   switch (action.type) {

      case getAllCategories_Type:
         const getAllCategories = await categoryAPI.getAllCategories();
         console.log(getAllCategories);
         return { ...state, categoryData: getAllCategories }

      case getDataCategoryByID_Type:
         const getDataCategoryByID = await categoryAPI.getDataCategoryByID(action.payload.id);
         console.log(getDataCategoryByID);
         return { ...state, categoryData: getDataCategoryByID }

      case getPostsByCategotyID_Type:
         const getPostsByCategotyID = await categoryAPI.getPostsByCategotyID(action.payload.title);
         console.log(getPostsByCategotyID);
         return { ...state, categoryData: getPostsByCategotyID }

      case addCategory_Type:
         const addCategory = await categoryAPI.addCategory(
            action.payload.title,
            action.payload.post_id);
         console.log(addCategory);
         return { ...state, categoryData: addCategory }

      case updateCategory_Type:
         const updateCategory = await categoryAPI.updateCategory(
            action.payload.id,
            action.payload.title);
         console.log(updateCategory);
         return { ...state, categoryData: updateCategory }

      case deleteCategory_Type:
         const deleteCategory = await categoryAPI.deleteCategory(action.payload.id);
         console.log(deleteCategory);
         return { ...state, categoryData: deleteCategory }

      default:
         return state
   }
}

// export const registerUser = (payload) => ({ type: register, payload });
// export const loginUser = (payload) => ({ type: login, payload });
// export const logoutUser = (payload) => ({ type: logout, payload });