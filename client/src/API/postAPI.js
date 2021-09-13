import api from '.'
import {
   addCommentsForPost_Post,
   addLikeForPost_Post,
   addPost_Post,
   deleteLikeByPost_Post,
   deletePost_Post,
   getAllCategoryByPostID_Post,
   getAllLikeByPostID_Post,
   getAllPosts_Post,
   getCommentsPostByID_Post,
   getPostByID_Post,
   updatePost_Post
} from '../reducers/postReducer/postReducer';

export const postAPI = {
   getAllPosts() {
      return async (dispatch) => {
         const dataPosts = await api.get(`/api/posts/`);
         return dispatch(getAllPosts_Post(dataPosts.data));
      }
   },

   getPostByID(id) {
      return async (dispatch) => {
         const dataPosts = await api.get(`/api/posts/${id}`)
         return dispatch(getPostByID_Post(dataPosts.data));
      }
   },

   getCommentsPostByID(id) {
      return async (dispatch) => {
         const dataComment = await api.get(`/api/posts/${id}/comments`);
         return dispatch(getCommentsPostByID_Post(dataComment.data));
      }
   },

   addCommentsForPost(id, content) {
      return async (dispatch) => {
         const dataComment = await api.post(`/api/posts/${id}/comments`, { content: content })
         return dispatch(addCommentsForPost_Post(dataComment.data));
      }
   },

   getAllCategoryByPostID(id) {
      return async (dispatch) => {
         const dataCategory = await api.get(`/api/posts/${id}/categories`)
         return dispatch(getAllCategoryByPostID_Post(dataCategory.data));
      }
   },

   getAllLikeByPostID(id) {
      return async (dispatch) => {
         const dataLike = await api.get(`/api/posts/${id}/like`)
         return dispatch(getAllLikeByPostID_Post(dataLike.data));
      }
   },

   addPost(title, content, categories) {
      return async (dispatch) => {
         const newPost = await api.post(`/api/posts/`, {
            title,
            content,
            categories
         });
         return dispatch(addPost_Post(newPost.data));
      }
   },

   addLikeForPost(id) {
      return async (dispatch) => {
         const dataPosts = await api.post(`/api/posts/${id}/like`)
         return dispatch(addLikeForPost_Post(dataPosts.data));
      }
   },

   updatePost(id, title, content, categories) {
      return async (dispatch) => {
         const dataPosts = await api.patch(`/api/posts/${id}`, { title: title, content: content, categories: categories })
         return dispatch(updatePost_Post(dataPosts.data));
      }
   },

   deletePost(id) {
      return async (dispatch) => {
         const deletedPost = await api.delete(`/api/posts/${id}`)
         return dispatch(deletePost_Post(deletedPost.data));
      }
   },

   deleteLikeByPost(id) {
      return async (dispatch) => {
         const deletedLike = await api.delete(`/api/posts/${id}/like`);
         return dispatch(deleteLikeByPost_Post(deletedLike.data));
      }
   },
}