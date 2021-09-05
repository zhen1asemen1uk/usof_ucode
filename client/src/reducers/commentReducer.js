import { initialState } from ".";
import { commentAPI } from "../API/commentAPI";
import {
   getCommentByID_Type, getCommentLikesByID_Type, addLikesByCommentID_Type,
   updateComment_Type, deleteComment_Type, deleteLikeByCommentID_Type
} from "./types";

export const commentReducer = async (state = initialState, action) => {
   switch (action.type) {

      case getCommentByID_Type:
         const getCommentByID = await commentAPI.getCommentByID(action.payload.id)
         console.log(getCommentByID);
         return { ...state, commentData: getCommentByID }

      case getCommentLikesByID_Type:
         const getCommentLikesByID = await commentAPI.getCommentLikesByID(action.payload.id)
         console.log(getCommentLikesByID);
         return { ...state, commentData: getCommentLikesByID }

      case addLikesByCommentID_Type:
         const addLikesByCommentID = await commentAPI.addLikesByCommentID(action.payload.id)
         console.log(addLikesByCommentID);
         return { ...state, commentData: addLikesByCommentID }

      case updateComment_Type:
         const updateComment = await commentAPI.updateComment(
            action.payload.id, action.payload.content_comment)
         console.log(updateComment);
         return { ...state, commentData: updateComment }

      case deleteComment_Type:
         const deleteComment = await commentAPI.deleteComment(action.payload.id)
         console.log(deleteComment);
         return { ...state, commentData: deleteComment }

      case deleteLikeByCommentID_Type:
         const deleteLikeByCommentID = await commentAPI.deleteLikeByCommentID(action.payload.id)
         console.log(deleteLikeByCommentID);
         return { ...state, commentData: deleteLikeByCommentID }

      default:
         return state
   }
}






