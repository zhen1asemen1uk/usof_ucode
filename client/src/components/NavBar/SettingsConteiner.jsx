import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userAPI } from '../../API/userAPI';
import Loading from '../Auth/Loading';
import Settings from './Settings';

const SettingsConteiner = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.authState.user);
	const updateData = useSelector((state) => state.userState.updateData);
	const isLoading = useSelector((store) => store.authState.isLoading);

	const addAvatar = (avatarFile) => {
		dispatch(userAPI.addAvatar(avatarFile));
	};

	const updateUser = (id, login, password, email) => {
		dispatch(userAPI.updateUser(id, login, password, email));
	};

	return isLoading === true ? (
		<Loading />
	) : (
		<Settings
			addAvatar={addAvatar}
			updateUser={updateUser}
			user={user}
			updateData={updateData}
		/>
	);
};

export default SettingsConteiner;
