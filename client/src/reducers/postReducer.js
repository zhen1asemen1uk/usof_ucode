import { postAPI } from "../API/postAPI";
import {
   getAllPosts_Type,
   getPostByID_Type,
   getCommentsPostByID_Type,
   addCommentsForPost_Type,
   getAllCategoryByPostID_Type,
   getAllLikeByPostID_Type,
   addPost_Type,
   addLikeForPost_Type,
   updatePost_Type,
   deletePost_Type,
   deleteLikeByPost_Type
} from "./types";


export const initialState = {
   postData: null
}

export const postReducer = async (state = initialState, action) => {
   switch (action.type) {

      case getAllPosts_Type:
         const getAllPosts = await postAPI.getAllPosts();
         console.log(getAllPosts);
         return { ...state, postData: getAllPosts }

      case getPostByID_Type:
         const getPostByID = await postAPI.getPostByID(action.payload.id);
         console.log(getPostByID);
         return { ...state, postData: getPostByID }

      case getCommentsPostByID_Type:
         const getCommentsPostByID = await postAPI.getCommentsPostByID(action.payload.id);
         console.log(getCommentsPostByID);
         return { ...state, postData: getCommentsPostByID }

      case addCommentsForPost_Type:
         const addCommentsForPost = await postAPI.addCommentsForPost(
            action.payload.id,
            action.payload.content);
         console.log(addCommentsForPost);
         return { ...state, postData: addCommentsForPost }

      case getAllCategoryByPostID_Type:
         const getAllCategoryByPostID = await postAPI.getAllCategoryByPostID(action.payload.id);
         console.log(getAllCategoryByPostID);
         return { ...state, postData: getAllCategoryByPostID }

      case getAllLikeByPostID_Type:
         const getAllLikeByPostID = await postAPI.getAllLikeByPostID(action.payload.id);
         console.log(getAllLikeByPostID);
         return { ...state, postData: getAllLikeByPostID }

      case addPost_Type:
         const addPost = await postAPI.addPost(
            action.payload.id,
            action.payload.title,
            action.payload.content,
            action.payload.categories);
         console.log(addPost);
         return { ...state, postData: addPost }

      case addLikeForPost_Type:
         const addLikeForPost = await postAPI.addLikeForPost(action.payload.id);
         console.log(addLikeForPost);
         return { ...state, postData: addLikeForPost }

      case updatePost_Type:
         const updatePost = await postAPI.updatePost(
            action.payload.id,
            action.payload.title,
            action.payload.content,
            action.payload.categories);
         console.log(updatePost);
         return { ...state, postData: updatePost }

      case deletePost_Type:
         const deletePost = await postAPI.deletePost(action.payload.id);
         console.log(deletePost);
         return { ...state, postData: deletePost }

      case deleteLikeByPost_Type:
         const deleteLikeByPost = await postAPI.deleteLikeByPost(action.payload.id);
         console.log(deleteLikeByPost);
         return { ...state, postData: deleteLikeByPost }

      default:
         return state
   }
}

export const getAllPosts_Post = (payload) => ({ type: getAllPosts_Type, payload });
export const getPostByID_Post = (payload) => ({ type: getPostByID_Type, payload });
export const getCommentsPostByID_Post = (payload) => ({ type: getCommentsPostByID_Type, payload });
export const addCommentsForPost_Post = (payload) => ({ type: addCommentsForPost_Type, payload });
export const getAllCategoryByPostID_Post = (payload) => ({ type: getAllCategoryByPostID_Type, payload });
export const getAllLikeByPostID_Post = (payload) => ({ type: getAllLikeByPostID_Type, payload });
export const addPost_Post = (payload) => ({ type: addPost_Type, payload });
export const addLikeForPost_Post = (payload) => ({ type: addLikeForPost_Type, payload });
export const updatePost_Post = (payload) => ({ type: updatePost_Type, payload });
export const deletePost_Post = (payload) => ({ type: deletePost_Type, payload });
export const deleteLikeByPost_Post = (payload) => ({ type: deleteLikeByPost_Type, payload });