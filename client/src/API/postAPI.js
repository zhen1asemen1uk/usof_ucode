import api from '.'
import { addPost_Post, getAllPosts_Post } from '../reducers/postReducer/postReducer';

export const postAPI = {
   getAllPosts() {
      return async function (dispatch) {
         const dataPosts = await api.get(`/api/posts/`)
         
         return dispatch(getAllPosts_Post(dataPosts));
      }
   },

   getPostByID(id) {
      return api.get(`/api/posts/${id}`)
   },

   getCommentsPostByID(id) {
      return api.get(`/api/posts/${id}/comments`)
   },

   addCommentsForPost(id, content) {
      return api.post(`/api/posts/${id}/comments`, { content: content })
   },

   getAllCategoryByPostID(id) {
      return api.get(`/api/posts/${id}/categories`)
   },

   getAllLikeByPostID(id) {
      return api.get(`/api/posts/${id}/like`)
   },

   addPost(title, content, categories) {
      return async function (dispatch) {
         const newPosts = await api.post(`/api/posts/`, {
            title: title,
            content: content,
            categories: categories
         })
         if (newPosts.data === 'Post add!') {
            return dispatch(addPost_Post({
               title,
               content,
               categories
            }));
         }
      }
   },

   addLikeForPost(id) {
      return api.post(`/api/posts/${id}/like`)
   },

   updatePost(id, title, content, categories) {
      return api.patch(`/api/posts/${id}`, { title: title, content: content, categories: categories })
   },

   deletePost(id) {
      return api.delete(`/api/posts/${id}`)
   },

   deleteLikeByPost(id) {
      return api.delete(`/api/posts/${id}/like`)
   },
}