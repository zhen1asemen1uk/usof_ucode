import api from "../API/login";

class CommentsServices {

   static async getCommentByID(id) {
      return api.get(`/api/comments/${id}`)
   }

   static async getCommentLikesByID(id) {
      return api.get(`/api/comments/${id}/like`)
   }

   static async addLikesByCommentID(id) {
      return api.post(`/api/comments/${id}/like`)
   }

   static async updateComment(id, content_comment) {
      return api.patch(`/api/comments/${id}`, { content_comment: content_comment })
   }

   static async deleteComment(id) {
      return api.delete(`/api/comments/${id}`);
   }
   static async deleteLikeByCommentID(id) {
      return api.delete(`/api/comments/${id}/like`);
   }
}

export default CommentsServices