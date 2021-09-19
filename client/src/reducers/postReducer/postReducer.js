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
   deleteLikeByPost_Type,
   sortByTitleASC_Type,
   sortByTitleDESC_Type,
   sortByAuthorASC_Type,
   sortByAuthorDESC_Type,
   sortByTimeASC_Type,
   sortByTimeDESC_Type,
   search_Type
} from "./types";


export const initialState = {
   postsData: [],
   postDataByID: [],
   postDataByUserID: [],
   commentsPostByID: [],
   categoryByPostID: [],
   likeForPost: [],
   filterPosts: []
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

      case sortByTitleASC_Type:
         action.payload.sort((a, b) => {
            if (b.title_post < a.title_post) {
               return -1
            } else {
               return 1
            }
         })
         return { ...state, postsData: action.payload }

      case sortByTitleDESC_Type:
         action.payload.sort((a, b) => {
            if (b.title_post > a.title_post) {
               return -1
            } else {
               return 1
            }
         })
         return { ...state, postsData: action.payload }

      case sortByAuthorASC_Type:
         action.payload.sort((a, b) => {
            if (b.login < a.login) {
               return -1
            } else {
               return 1
            }
         })
         return { ...state, postsData: action.payload }

      case sortByAuthorDESC_Type:
         action.payload.sort((a, b) => {
            if (b.login > a.login) {
               return -1
            } else {
               return 1
            }
         })
         return { ...state, postsData: action.payload }

      case sortByTimeASC_Type:
         action.payload.sort((a, b) => {
            if (b.created_at < a.created_at) {
               return -1
            } else {
               return 1
            }
         });
         return { ...state, postsData: action.payload }

      case sortByTimeDESC_Type:
         action.payload.sort((a, b) => {
            if (b.created_at > a.created_at) {
               return -1
            } else {
               return 1
            }
         });
         return { ...state, postsData: action.payload }

      case search_Type:
         const title = state.postsData.filter((word) => {
            return word.title_post.includes(action.payload);
         });
         const content = state.postsData.filter((word) => {
            return word.content_post.includes(action.payload)
         });
         
         const filterPostsData = title.concat(content).filter(
            (v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

         return { ...state, filterPosts: filterPostsData }

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

export const sortByTitleASC_Post = (payload) => ({ type: sortByTitleASC_Type, payload });
export const sortByTitleDESC_Post = (payload) => ({ type: sortByTitleDESC_Type, payload });
export const sortByAuthorASC_Post = (payload) => ({ type: sortByAuthorASC_Type, payload });
export const sortByAuthorDESC_Post = (payload) => ({ type: sortByAuthorDESC_Type, payload });
export const sortByTimeASC_Post = (payload) => ({ type: sortByTimeASC_Type, payload });
export const sortByTimeDESC_Post = (payload) => ({ type: sortByTimeDESC_Type, payload });

export const search_Post = (payload) => ({ type: search_Type, payload });


