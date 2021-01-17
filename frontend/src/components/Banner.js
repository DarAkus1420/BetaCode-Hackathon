import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function Banner() {
	const [isUser, setIsUser] = useState(false);

	const handleIsUser = () => {
		if (localStorage.getItem('user') && localStorage.getItem('token')) return true;
		return false;
	};

	useEffect(() => {
		setIsUser(handleIsUser());
	}, [isUser]);

	return (
		<div class="col-12" id="banner">
			{!isUser ? (
				<div>
					<Link className="btn btn-primary" to="/login">
						Login
					</Link>
					<Link className="btn btn-primary" to="/register">
						Register
					</Link>
				</div>
			) : (
				<Logout />
			)}
			<div className="col-3">
				<img src=""></img>
			</div>
			<div className="col-9 text-center" id="texto-banner">
				<h1>Bienvenido a (nombre app)</h1>
			</div>
		</div>
	);
}
