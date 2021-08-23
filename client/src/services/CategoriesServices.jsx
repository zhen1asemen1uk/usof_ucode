import api from "../API/login";

class CategoriesServices {

   static async getAllCategories() {
      return api.get(`/api/categories/`)
   }

   static async getDataCategoryByID(id) {
      return api.get(`/api/categories/${id}`);
   }

   static async getPostsByCategotyID(title) {
      return api.get(`/api/categories/${title}/posts`);
   }

   static async addCategory(title, post_id) {
      return api.post(`/api/categories`, { title: title, post_id: post_id });
   }

   static async addCategory(id, title) {
      return api.patch(`/api/categories/${id}`, { title: title });
   }

   static async deleteCategory(id) {
      return api.delete(`/api/category/${id}`);
   }
}

export default CategoriesServices