import React from 'react';

import AddPost from './AddPost';

const NonePosts = (props) => {
	const { addPost, authState } = props;

	return (
		<>
			<h1>
				None posts{' '}
				<span role='img' aria-label='donut'>
					😕
				</span>
			</h1>
			{authState.isAuth ? <AddPost addPost={addPost} /> : <></>}
		</>
	);
};
export default NonePosts;
