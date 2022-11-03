import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';

import Loading from '../Auth/Loading';
import Users from './Users';
import NoneUsers from './NoneUsers';

export const UsersConteiner = () => {
	const dispatch = useDispatch();

	const userState = useSelector((state) => state.userState);
	const isLoading = useSelector((state) => state.authState.isLoading);

	const getUserByID = (userID) => {
		dispatch(userAPI.getUserByID(userID));
	};

	const getPostByUserID = (userID) => {
		dispatch(postAPI.getPostByUserID(userID));
	};

	if (userState.users.length > 0) {
		return (
			<>
				{isLoading === false ? (
					<Users
						userState={userState}
						getUserByID={getUserByID}
						getPostByUserID={getPostByUserID}
					/>
				) : (
					<Loading />
				)}
			</>
		);
	}

	return <>{isLoading === false ? <NoneUsers /> : <Loading />}</>;
};
export default UsersConteiner;
