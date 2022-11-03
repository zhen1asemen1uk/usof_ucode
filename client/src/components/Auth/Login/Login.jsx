import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import stl from '../../../styles/Login.module.css';

const Login = (props) => {
	const { sendLoginData, authState } = props;

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<h1>
				Login Page
				<span role='img' aria-label='donut'>
					🚪
				</span>
			</h1>
			<div className={stl.wrappFormLog}>
				<input
					type='text'
					name='login'
					id={stl.login}
					placeholder='Login'
					autoFocus
					required={true}
					maxLength={40}
					pattern={'[A-Za-z]+'}
					value={login}
					onChange={(e) => setLogin(e.target.value)}
					className={`${stl.log} ${stl.inp}`}
				/>

				<input
					type='password'
					name='password'
					id={stl.password}
					placeholder='Password'
					minLength={8}
					required={true}
					maxLength={18}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className={`${stl.pass} ${stl.inp}`}
				/>

				<div className={stl.resetPass}>
					<Link to='resetPassword'>reset password?</Link>
				</div>

				<button
					onClick={() => {
						sendLoginData(login, password);
					}}
					className={stl.btnSend}>
					Login
				</button>

				{typeof authState.user == 'string' ? (
					<div className={stl.notification}>{authState.user}</div>
				) : (
					<div></div>
				)}
			</div>
		</>
	);
};

export default Login;
