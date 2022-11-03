import api from '.';
import { isLoading_Auth } from '../reducers/authReducer/authReducer';
import {
	addAvatar_User,
	deleteUser_User,
	getAllUsers_User,
	getUserByID_User,
	registerForADMIN_User,
	updateUser_User,
} from '../reducers/userReducer/userReducer';

export const userAPI = {
	getAllUsers() {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const usersData = await api.get(`/api/users/`);
				return dispatch(getAllUsers_User(usersData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},

	getUserByID(id) {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const usersData = await api.get(`/api/users/${id}`);
				return dispatch(getUserByID_User(usersData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},

	registerForADMIN(login, password, password_confirm, email, status, verify) {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const usersData = await api.post(`/api/users/`, {
					login: login,
					password: password,
					password_confirm: password_confirm,
					email: email,
					status: status,
					verify: verify,
				});
				return dispatch(registerForADMIN_User(usersData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},

	addAvatar(ava) {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const formData = new FormData();
				formData.append('ava', ava);

				const updateData = await api.patch(
					`/api/users/avatar`,
					formData
				);
				return dispatch(addAvatar_User(updateData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},

	updateUser(id, login, password, email) {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const updateData = await api.patch(`/api/users/${id}`, {
					login: login,
					password: password,
					email: email,
				});

				return dispatch(updateUser_User(updateData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},

	deleteUser(id) {
		return async (dispatch) => {
			try {
				dispatch(isLoading_Auth(true));
				const updateData = await api.delete(`/api/users/${id}`);

				return dispatch(deleteUser_User(updateData.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(isLoading_Auth(false));
			}
		};
	},
};
