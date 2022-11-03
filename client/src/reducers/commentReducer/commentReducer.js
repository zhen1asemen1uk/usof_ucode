import { commentAPI } from '../../API/commentAPI';
import {
	getCommentByID_Type,
	getCommentLikesByID_Type,
	addLikesByCommentID_Type,
	updateComment_Type,
	deleteComment_Type,
	deleteLikeByCommentID_Type,
} from './types';

export const initialState = {
	commentData: null,
};

export const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case getCommentByID_Type:
			const getCommentByID = commentAPI.getCommentByID(action.payload.id);

			console.log(getCommentByID);
			return { ...state, commentData: getCommentByID };

		case getCommentLikesByID_Type:
			const getCommentLikesByID = commentAPI.getCommentLikesByID(
				action.payload.id
			);

			console.log(getCommentLikesByID);
			return { ...state, commentData: getCommentLikesByID };

		case addLikesByCommentID_Type:
			const addLikesByCommentID = commentAPI.addLikesByCommentID(
				action.payload.id
			);

			console.log(addLikesByCommentID);
			return { ...state, commentData: addLikesByCommentID };

		case updateComment_Type:
			const updateComment = commentAPI.updateComment(
				action.payload.id,
				action.payload.content_comment
			);

			console.log(updateComment);
			return { ...state, commentData: updateComment };

		case deleteComment_Type:
			const deleteComment = commentAPI.deleteComment(action.payload.id);

			console.log(deleteComment);
			return { ...state, commentData: deleteComment };

		case deleteLikeByCommentID_Type:
			const deleteLikeByCommentID = commentAPI.deleteLikeByCommentID(
				action.payload.id
			);

			console.log(deleteLikeByCommentID);
			return { ...state, commentData: deleteLikeByCommentID };

		default:
			return state;
	}
};

export const getCommentByID_Comment = (payload) => ({
	type: getCommentByID_Type,
	payload,
});

export const getCommentLikesByID_Comment = (payload) => ({
	type: getCommentLikesByID_Type,
	payload,
});

export const addLikesByCommentID_Comment = (payload) => ({
	type: addLikesByCommentID_Type,
	payload,
});

export const updateComment_Comment = (payload) => ({
	type: updateComment_Type,
	payload,
});

export const deleteComment_Comment = (payload) => ({
	type: deleteComment_Type,
	payload,
});

export const deleteLikeByCommentID_Comment = (payload) => ({
	type: deleteLikeByCommentID_Type,
	payload,
});
