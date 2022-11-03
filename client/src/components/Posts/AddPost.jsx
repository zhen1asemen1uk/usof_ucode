import React, { useState } from 'react';
import stl from '../../styles/Posts.module.css';

const AddPost = (props) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [categories, setCategories] = useState('Other');

	const { addPost } = props;

	return (
		<div>
			<div className={stl.addPost}>
				<input
					type='text'
					placeholder='title'
					autoComplete='off'
					name='title'
					id={stl.title}
					onChange={(e) => setTitle(e.target.value)}
					className={`${stl.postInp} ${stl.title}`}
				/>
				<br />
				<input
					type='text'
					placeholder='content'
					autoComplete='off'
					name='content'
					id={stl.content}
					onChange={(e) => setContent(e.target.value)}
					className={`${stl.postInp} ${stl.content}`}
				/>
				<br />
				<input
					type='text'
					placeholder='categories'
					autoComplete='off'
					name='categories'
					id={stl.categories}
					onChange={(e) => setCategories(e.target.value)}
					className={`${stl.postInp} ${stl.categories}`}
				/>
				<br />

				<button
					className={stl.btn}
					onClick={() => {
						addPost(title, content, categories);
					}}>
					add
				</button>
			</div>
		</div>
	);
};
export default AddPost;
