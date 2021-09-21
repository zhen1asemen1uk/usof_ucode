import api from '.'
import { isLoading_Auth } from '../reducers/authReducer/authReducer';
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
   getPostByUserID_Post,
   getPostByID_Post,
   updatePost_Post,
   search_Post
} from '../reducers/postReducer/postReducer';

export const postAPI = {
   getAllPosts() {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataPosts = await api.get(`/api/posts/`);

            return dispatch(getAllPosts_Post(dataPosts.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   getPostByID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataPosts = await api.get(`/api/posts/${id}`)

            return dispatch(getPostByID_Post(dataPosts.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },
   getPostByUserID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataPosts = await api.get(`/api/posts/${id}/user`)

            return dispatch(getPostByUserID_Post(dataPosts.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));

         }
      }
   },

   getCommentsPostByID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataComment = await api.get(`/api/posts/${id}/comments`);

            return dispatch(getCommentsPostByID_Post(dataComment.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));

         }
      }
   },

   addCommentsForPost(id, content) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataComment = await api.post(`/api/posts/${id}/comments`, { content: content })

            return dispatch(addCommentsForPost_Post(dataComment.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   getAllCategoryByPostID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataCategory = await api.get(`/api/posts/${id}/categories`)

            return dispatch(getAllCategoryByPostID_Post(dataCategory.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   getAllLikeByPostID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataLike = await api.get(`/api/posts/${id}/like`)

            return dispatch(getAllLikeByPostID_Post(dataLike.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   addPost(title, content, categories) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const newPost = await api.post(`/api/posts/`, {
               title,
               content,
               categories
            });
            return dispatch(addPost_Post(newPost.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   addLikeForPost(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataPosts = await api.post(`/api/posts/${id}/like`)

            return dispatch(addLikeForPost_Post(dataPosts.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   updatePost(id, title, content, categories) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataPosts = await api.patch(`/api/posts/${id}`, { title: title, content: content, categories: categories })

            return dispatch(updatePost_Post(dataPosts.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   deletePost(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const deletedPost = await api.delete(`/api/posts/${id}`)

            return dispatch(deletePost_Post(deletedPost.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   deleteLikeByPost(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const deletedLike = await api.delete(`/api/posts/${id}/like`);

            return dispatch(deleteLikeByPost_Post(deletedLike.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   search(data) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));

            return dispatch(search_Post(data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   }
}
