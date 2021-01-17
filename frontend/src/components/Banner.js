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
		<header className="header">
			<div className="bg-dark">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<a className="navbar-brand" href="#">
							Bienvenid@ a (nombre app)
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navg navbar-nav w-100 justify-content-center">
								<a className="nav-item nav-link active" href="#">
									Home <span class="sr-only">(current)</span>
								</a>

								{!isUser ? (
									<div>
										<Link className="" to="/login">
											Login
										</Link>
										<Link className="" to="/register">
											Register
										</Link>
									</div>
								) : (
									<Logout />
								)}
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="text-header d-flex align-item-center">
				<div className="container">
					<div className="row">
						<div className="col-sm-8">
							<h2>
								Colector de <span>canciones</span>
							</h2>
							<p>lorem ipsum</p>
							<a href="" className="btn btn-yo">
								<span>Mis favoritos</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
		/*<div className="col-12" id="banner">
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
		</div>*/
	);
}
