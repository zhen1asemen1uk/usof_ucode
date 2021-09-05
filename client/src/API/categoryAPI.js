import api from '.'

export const categoryAPI = {
   async getAllCategories() {
      return api.get(`/api/categories/`)
   },

   async getDataCategoryByID(id) {
      return api.get(`/api/categories/${id}`);
   },

   async getPostsByCategotyID(title) {
      return api.get(`/api/categories/${title}/posts`);
   },

   async addCategory(title, post_id) {
      return api.post(`/api/categories`, { title: title, post_id: post_id });
   },

   async updateCategory(id, title) {
      return api.patch(`/api/categories/${id}`, { title: title });
   },

   async deleteCategory(id) {
      return api.delete(`/api/category/${id}`);
   }
}