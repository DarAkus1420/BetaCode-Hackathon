import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function Banner(props) {
	const { isUser, setIsUser } = props;
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
							<div className="navg navbar-nav w-100">
								<Link className="nav-item nav-link active" to="/">
									Home <span class="sr-only">(current)</span>
								</Link>

								{!isUser ? (
									<div id="botones">
										<Link className="log-banner" to="/login">
											Login
										</Link>
										<Link className="reg-banner" to="/register">
											Register
										</Link>
									</div>
								) : (
									<Logout setIsUser={setIsUser} />
								)}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
