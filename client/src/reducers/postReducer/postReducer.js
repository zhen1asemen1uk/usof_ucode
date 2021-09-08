import { postAPI } from "../../API/postAPI";
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
   postsData: []
}

export const postReducer = (state = initialState, action) => {
   switch (action.type) {

      case getAllPosts_Type:

         return { ...state, postsData: action.payload.data }

      case getPostByID_Type:
         console.log(1);
         const getPostByID = postAPI.getPostByID(action.payload.id);
         console.log(getPostByID);
         return { ...state, postsData: getPostByID }

      case getCommentsPostByID_Type:
         const getCommentsPostByID = postAPI.getCommentsPostByID(action.payload.id);
         console.log(getCommentsPostByID);
         return { ...state, postsData: getCommentsPostByID }

      case addCommentsForPost_Type:
         const addCommentsForPost = postAPI.addCommentsForPost(
            action.payload.id,
            action.payload.content);
         console.log(addCommentsForPost);
         return { ...state, postsData: addCommentsForPost }

      case getAllCategoryByPostID_Type:
         const getAllCategoryByPostID = postAPI.getAllCategoryByPostID(action.payload.id);
         console.log(getAllCategoryByPostID);
         return { ...state, postsData: getAllCategoryByPostID }

      case getAllLikeByPostID_Type:
         const getAllLikeByPostID = postAPI.getAllLikeByPostID(action.payload.id);
         console.log(getAllLikeByPostID);
         return { ...state, postsData: getAllLikeByPostID }

      case addPost_Type:
         const addPost = postAPI.addPost(
            action.payload.title,
            action.payload.content,
            action.payload.categories);
         return { ...state, postsData: addPost }

      case addLikeForPost_Type:
         const addLikeForPost = postAPI.addLikeForPost(action.payload.id);
         console.log(addLikeForPost);
         return { ...state, postsData: addLikeForPost }

      case updatePost_Type:
         const updatePost = postAPI.updatePost(
            action.payload.id,
            action.payload.title,
            action.payload.content,
            action.payload.categories);
         console.log(updatePost);
         return { ...state, postsData: updatePost }

      case deletePost_Type:
         const deletePost = postAPI.deletePost(action.payload.id);
         console.log(deletePost);
         return { ...state, postsData: deletePost }

      case deleteLikeByPost_Type:
         const deleteLikeByPost = postAPI.deleteLikeByPost(action.payload.id);
         console.log(deleteLikeByPost);
         return { ...state, postsData: deleteLikeByPost }

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