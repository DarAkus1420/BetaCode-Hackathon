import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register(props) {
	const { setIsUser } = props;
	const BASE_URL = 'http://localhost:3000/api/v1';
	const history = useHistory();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [badPass, setBadPass] = useState(false);

	const handleInputChange = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const sendUser = event => {
		event.preventDefault();
		axios
			.post(`${BASE_URL}/auth/login`, { ...user })
			.then(response => {
				localStorage.setItem('token', response.data.data.token);
				localStorage.setItem('user', response.data.data.user);
				setIsUser(true);
				history.push('/');
			})
			.catch(e => {
				console.log(e.response);
				setBadPass(true);
			});
	};

	return (
		<div className="modal-dialog text-center">
			<div className="col-sm-8 main-section">
				<div className="modal-content">
					<div className="col-12 user-img">
						<img src=""></img>
					</div>
					<form className="col-12" onSubmit={sendUser}>
						<div className="form-group" id="email-group">
							<input
								type="text"
								class="form-control"
								placeholder="Correo"
								name="email"
								onChange={handleInputChange}
								autocomplete="off"
							></input>
						</div>
						<div className="form-group" id="constraseña-group">
							<input
								type="password"
								class="form-control"
								placeholder="Contraseña"
								autocomplete="off"
								onChange={handleInputChange}
								name="password"
							></input>
						</div>
						<button type="submit" className="btn btn-primary" id="boton-login">
							<i className="fas fa-sign-in-alt"></i> Ingresar
						</button>
					</form>
					<p>{badPass ? 'Datos erroneos' : ''}</p>
				</div>
			</div>
		</div>
	);
}
