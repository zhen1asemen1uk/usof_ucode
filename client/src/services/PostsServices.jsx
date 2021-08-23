import api from "../API/login";

class PostsServices {
   static async getAllPosts() {
      return api.get(`/api/posts/`)
   }

   static async getPostByID(id) {
      return api.get(`/api/posts/${id}`)
   }

   static async getCommentsPostByID(id) {
      return api.get(`/api/posts/${id}/comments`)
   }

   static async addCommentsForPost(id, content) {
      return api.post(`/api/posts/${id}/comments`, { content: content })
   }

   static async getAllCategoryByPostID(id) {
      return api.get(`/api/posts/${id}/categories`)
   }

   static async getAllLikeByPostID(id) {
      return api.get(`/api/posts/${id}/like`)
   }

   static async addPost(id, title, content, categories) {
      return api.post(`/api/posts/`, { title: title, content: content, categories: categories })
   }

   static async addLikeForPost(id) {
      return api.post(`/api/posts/${id}/like`)
   }

   static async updatePost(id, title, content, categories) {
      return api.patch(`/api/posts/${id}`, { title: title, content: content, categories: categories })
   }

   static async deletePost(id) {
      return api.delete(`/api/posts/${id}`)
   }

   static async deleteLikeByPost(id) {
      return api.delete(`/api/posts/${id}/like`)
   }
}

export default PostsServices