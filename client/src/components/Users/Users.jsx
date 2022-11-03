import React from 'react';
import AllUsers from './AllUsers';

export const Users = (props) => {
	const { userState, getUserByID, getPostByUserID } = props;
	return (
		<AllUsers
			users={userState.users}
			getUserByID={getUserByID}
			getPostByUserID={getPostByUserID}
		/>
	);
};
export default Users;
