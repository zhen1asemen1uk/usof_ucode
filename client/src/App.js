import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import NotAuth from './components/NavBar/NotAuth';

import { authAPI } from './API/authAPI';

import './styles/App.css';
import Loading from './components/Auth/Loading';
import IsAuthConteiner from './components/NavBar/IsAuthConteiner';

const App = () => {
	const store = useSelector((store) => store);
	const isLoading = useSelector((store) => store.authState.isLoading);

	//for true auth status
	if (
		localStorage.getItem(`token`) &&
		localStorage.getItem(`token`) !== 'undefined'
	) {
		store.authState.isAuth = true;
	}

	//for save avatar after refresh page
	if (
		localStorage.getItem(`userData`) &&
		localStorage.getItem(`userData`) !== 'undefined'
	) {
		const obj = JSON.parse(localStorage.getItem(`userData`));
		store.authState.user = obj;
	}

	useEffect(() => {
		if (localStorage.getItem(`token`)) {
			authAPI.checkAuth();
		}
	}, [store]);

	return (
		<>
			<BrowserRouter>
				<header>
					<nav className='navBar'>
						{store.authState.isAuth ? (
							<IsAuthConteiner />
						) : (
							<NotAuth />
						)}
					</nav>
				</header>
				{isLoading === true ? <Loading /> : <AppRouter />}
			</BrowserRouter>
		</>
	);
};

export default App;
