import { initialState } from ".";
import { postAPI } from "../API/postAPI";
import { register, login, logout } from "./types";

export const postReducer = async (state = initialState, action) => {
   switch (action.type) {

      case register:
         const getAllPosts = await postAPI.getAllPosts();
         console.log(getAllPosts);
         return { ...state, postData: getAllPosts }

      case login:
         const getPostByID = await postAPI.getPostByID(id);
         console.log(getPostByID);
         return { ...state, postData: getPostByID }

      case logout:
         const getCommentsPostByID = await postAPI.getCommentsPostByID(id);
         console.log(getCommentsPostByID);
         return { ...state, postData: getCommentsPostByID }
      case logout:
         const addCommentsForPost = await postAPI.addCommentsForPost(id, content);
         console.log(addCommentsForPost);
         return { ...state, postData: addCommentsForPost }
      case logout:
         const getAllCategoryByPostID = await postAPI.getAllCategoryByPostID(id);
         console.log(getAllCategoryByPostID);
         return { ...state, postData: getAllCategoryByPostID }
      case logout:
         const getAllLikeByPostID = await postAPI.getAllLikeByPostID(id);
         console.log(getAllLikeByPostID);
         return { ...state, postData: getAllLikeByPostID }
      case logout:
         const addPost = await postAPI.addPost(id, title, content, categories);
         console.log(addPost);
         return { ...state, postData: addPost }
      case logout:
         const addLikeForPost = await postAPI.addLikeForPost(id);
         console.log(addLikeForPost);
         return { ...state, postData: addLikeForPost }
      case logout:
         const updatePost = await postAPI.updatePost(id, title, content, categories);
         console.log(updatePost);
         return { ...state, postData: updatePost }
      case logout:
         const deletePost = await postAPI.deletePost(id);
         console.log(deletePost);
         return { ...state, postData: deletePost }
      case logout:
         const deleteLikeByPost = await postAPI.deleteLikeByPost(id);
         console.log(deleteLikeByPost);
         return { ...state, postData: deleteLikeByPost }

      default:
         return state
   }
}










