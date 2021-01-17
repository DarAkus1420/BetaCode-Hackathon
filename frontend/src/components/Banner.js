import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default function Banner() {
	return (
		<div class="col-12" id="banner">
			<Link className="btn btn-primary" to="/login">
				Login
			</Link>
			<Link className="btn btn-primary" to="/register">
				Register
			</Link>
			<Logout />
			<div class="col-3">
				<img src=""></img>
			</div>
			<div class="col-9 text-center" id="texto-banner">
				<h1>Bienvenido a (nombre app)</h1>
			</div>
		</div>
	);
}
