import React, { useState } from 'react';
import stl from '../../../styles/Register.module.css';

const Register = (props) => {
	const { sendRegisterData, authState } = props;

	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirm, setPassword_confirm] = useState('');

	return (
		<>
			<h1>Register Page</h1>
			<div className={stl.wrappFormReg}>
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

				<input
					type='password'
					name='password_confirm'
					id={stl.password_confirm}
					placeholder='Password confirm'
					minLength={8}
					required={true}
					value={password_confirm}
					onChange={(e) => setPassword_confirm(e.target.value)}
					className={`${stl.confPass} ${stl.inp}`}
				/>

				<input
					type='email'
					name='email'
					id={stl.email}
					placeholder='Email'
					required={true}
					maxLength={50}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={`${stl.email} ${stl.inp}`}
				/>

				<button
					onClick={() => {
						sendRegisterData(
							login,
							password,
							password_confirm,
							email
						);
					}}
					className={`${stl.btnSend}`}>
					Create
				</button>

				{typeof authState.user === 'string' ? (
					<div className={stl.notification}>{authState.user}</div>
				) : (
					<div></div>
				)}
			</div>
		</>
	);
};

export default Register;
