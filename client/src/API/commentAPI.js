import api from '.';

export const commentAPI = {
	getCommentByID(id) {
		return api.get(`/api/comments/${id}`);
	},

	getCommentLikesByID(id) {
		return api.get(`/api/comments/${id}/like`);
	},

	addLikesByCommentID(id) {
		return api.post(`/api/comments/${id}/like`);
	},

	updateComment(id, content_comment) {
		return api.patch(`/api/comments/${id}`, {
			content_comment: content_comment,
		});
	},

	deleteComment(id) {
		return api.delete(`/api/comments/${id}`);
	},

	deleteLikeByCommentID(id) {
		return api.delete(`/api/comments/${id}/like`);
	},
};
