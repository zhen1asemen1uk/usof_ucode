import api from '.';

export const categoryAPI = {
	getAllCategories() {
		return api.get(`/api/categories/`);
	},

	getDataCategoryByID(id) {
		return api.get(`/api/categories/${id}`);
	},

	getPostsByCategotyID(title) {
		return api.get(`/api/categories/${title}/posts`);
	},

	addCategory(title, post_id) {
		return api.post(`/api/categories`, { title: title, post_id: post_id });
	},

	updateCategory(id, title) {
		return api.patch(`/api/categories/${id}`, { title: title });
	},

	deleteCategory(id) {
		return api.delete(`/api/category/${id}`);
	},
};
