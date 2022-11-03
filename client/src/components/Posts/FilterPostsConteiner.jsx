import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Auth/Loading';
import AllPosts from './AllPosts';

const FilterPostsConteiner = () => {
	const filterPosts = useSelector((state) => state.postState.filterPosts);

	const isLoading = useSelector((store) => store.authState.isLoading);

	return (
		<>
			{isLoading === false ? (
				<AllPosts postsData={filterPosts} />
			) : (
				<Loading />
			)}
		</>
	);
};

export default FilterPostsConteiner;
