import api from '.'

export const postAPI = {
   async getAllPosts() {
      return api.get(`/api/posts/`)
   },

   async getPostByID(id) {
      return api.get(`/api/posts/${id}`)
   },

   async getCommentsPostByID(id) {
      return api.get(`/api/posts/${id}/comments`)
   },

   async addCommentsForPost(id, content) {
      return api.post(`/api/posts/${id}/comments`, { content: content })
   },

   async getAllCategoryByPostID(id) {
      return api.get(`/api/posts/${id}/categories`)
   },

   async getAllLikeByPostID(id) {
      return api.get(`/api/posts/${id}/like`)
   },

   async addPost( title, content, categories) {
      return api.post(`/api/posts/`, { title: title, content: content, categories: categories })
   },

   async addLikeForPost(id) {
      return api.post(`/api/posts/${id}/like`)
   },

   async updatePost(id, title, content, categories) {
      return api.patch(`/api/posts/${id}`, { title: title, content: content, categories: categories })
   },

   async deletePost(id) {
      return api.delete(`/api/posts/${id}`)
   },

   async deleteLikeByPost(id) {
      return api.delete(`/api/posts/${id}/like`)
   },
}