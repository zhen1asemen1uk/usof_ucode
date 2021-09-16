import {
   getAllPosts_Type,
   getPostByID_Type,
   getPostByUserID_Type,
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
   postsData: [],
   postDataByID: [],
   postDataByUserID:[],
   commentsPostByID: [],
   categoryByPostID: [],
   likeForPost: []
}

export const postReducer = (state = initialState, action) => {
   switch (action.type) {

      case getAllPosts_Type:
         return { ...state, postsData: action.payload }

      case getPostByID_Type:
         return {
            ...state, postDataByID: action.payload
         }

      case getPostByUserID_Type:
         return {
            ...state, postDataByUserID: action.payload
         }

      case getCommentsPostByID_Type:
         return { ...state, commentsPostByID: action.payload }

      case addCommentsForPost_Type://!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         return { ...state }

      case getAllCategoryByPostID_Type:
         return { ...state, categoryByPostID: action.payload }

      case getAllLikeByPostID_Type:
         return { ...state, likeForPost: action.payload }

      case addPost_Type:
         return {
            ...state, postsData: state.postsData.concat({ ...action.payload })
         }

      case addLikeForPost_Type://!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         return { ...state }

      case updatePost_Type://!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         return { ...state }

      case deletePost_Type://!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         console.log(action.payload);
         return { ...state }

      case deleteLikeByPost_Type://!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         return { ...state }

      default:
         return state
   }
}

export const getAllPosts_Post = (payload) => ({ type: getAllPosts_Type, payload });
export const getPostByID_Post = (payload) => ({ type: getPostByID_Type, payload });
export const getPostByUserID_Post = (payload) => ({ type: getPostByUserID_Type, payload });
export const getCommentsPostByID_Post = (payload) => ({ type: getCommentsPostByID_Type, payload });
export const addCommentsForPost_Post = (payload) => ({ type: addCommentsForPost_Type, payload });
export const getAllCategoryByPostID_Post = (payload) => ({ type: getAllCategoryByPostID_Type, payload });
export const getAllLikeByPostID_Post = (payload) => ({ type: getAllLikeByPostID_Type, payload });
export const addPost_Post = (payload) => ({ type: addPost_Type, payload });
export const addLikeForPost_Post = (payload) => ({ type: addLikeForPost_Type, payload });
export const updatePost_Post = (payload) => ({ type: updatePost_Type, payload });
export const deletePost_Post = (payload) => ({ type: deletePost_Type, payload });
export const deleteLikeByPost_Post = (payload) => ({ type: deleteLikeByPost_Type, payload });