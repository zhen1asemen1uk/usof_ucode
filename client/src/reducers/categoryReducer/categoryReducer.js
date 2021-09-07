import { categoryAPI } from "../../API/categoryAPI";
import {
   getAllCategories_Type, getDataCategoryByID_Type, getPostsByCategotyID_Type,
   addCategory_Type, updateCategory_Type, deleteCategory_Type
} from "./types";

export const initialState = {
   categoryData:null
}

export const categoryReducer =  (state = initialState, action) => {
   switch (action.type) {

      case getAllCategories_Type:
         const getAllCategories =  categoryAPI.getAllCategories();

         console.log(getAllCategories);
         return { ...state, categoryData: getAllCategories }

      case getDataCategoryByID_Type:
         const getDataCategoryByID =  categoryAPI.getDataCategoryByID(action.payload.id);

         console.log(getDataCategoryByID);
         return { ...state, categoryData: getDataCategoryByID }

      case getPostsByCategotyID_Type:
         const getPostsByCategotyID =  categoryAPI.getPostsByCategotyID(action.payload.title);

         console.log(getPostsByCategotyID);
         return { ...state, categoryData: getPostsByCategotyID }

      case addCategory_Type:
         const addCategory =  categoryAPI.addCategory(
            action.payload.title,
            action.payload.post_id);

         console.log(addCategory);
         return { ...state, categoryData: addCategory }

      case updateCategory_Type:
         const updateCategory =  categoryAPI.updateCategory(
            action.payload.id,
            action.payload.title);

         console.log(updateCategory);
         return { ...state, categoryData: updateCategory }

      case deleteCategory_Type:
         const deleteCategory =  categoryAPI.deleteCategory(action.payload.id);

         console.log(deleteCategory);
         return { ...state, categoryData: deleteCategory }

      default:
         return state
   }
}

export const getAllCategories_Category = (payload) => ({ type: getAllCategories_Type, payload });
export const getDataCategoryByID_Category = (payload) => ({ type: getDataCategoryByID_Type, payload });
export const getPostsByCategotyID_Category = (payload) => ({ type: getPostsByCategotyID_Type, payload });
export const addCategory_Category = (payload) => ({ type: addCategory_Type, payload });
export const updateCategory_Category = (payload) => ({ type: updateCategory_Type, payload });
export const deleteCategory_Category = (payload) => ({ type: deleteCategory_Type, payload });