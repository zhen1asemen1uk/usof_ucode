import api from '.'

export const commentAPI = {
   async getCommentByID(id) {
      return api.get(`/api/comments/${id}`)
   },

   async getCommentLikesByID(id) {
      return api.get(`/api/comments/${id}/like`)
   },

   async addLikesByCommentID(id) {
      return api.post(`/api/comments/${id}/like`)
   },

   async updateComment(id, content_comment) {
      return api.patch(`/api/comments/${id}`, { content_comment: content_comment })
   },

   async deleteComment(id) {
      return api.delete(`/api/comments/${id}`);
   },

   async deleteLikeByCommentID(id) {
      return api.delete(`/api/comments/${id}/like`);
   }
}