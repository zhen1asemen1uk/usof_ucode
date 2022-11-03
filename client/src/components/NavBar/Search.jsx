import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import stl from '../../styles/IsAuth.module.css';

const Search = (props) => {
	const { searchAPI } = props;

	const [search, setSearch] = useState('');

	return (
		<div className={stl.searchWrapper}>
			<input
				type='search'
				name='search'
				id={stl.search}
				className={stl.search}
				onChange={(e) => setSearch(e.target.value)}
				value={search}
				autoComplete='off'
				placeholder='Search posts by title/content'
			/>
			<Link
				to='filterPosts'
				className={stl.searchBtn}
				onClick={() => {
					setSearch('');
					searchAPI(search);
				}}></Link>
		</div>
	);
};

export default Search;
