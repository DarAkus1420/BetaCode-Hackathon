import React from 'react';
import Validar from './Validar';

export default function Login() {
	const user = {
		name: '',
		password: '',
	};

	return (
		<div className="modal-dialog text-center">
			<div className="col-sm-8 main-section">
				<div className="modal-content">
					<div className="col-12 user-img">
						<img src=""></img>
					</div>
					<form className="col-12">
						<div className="form-group" id="user-group">
							<input
								type="text"
								class="form-control"
								placeholder="Nombre de usuario"
								name="name"
							></input>
						</div>
						<div className="form-group" id="constraseña-group">
							<input
								type="password"
								class="form-control"
								placeholder="Password"
								name="password"
							></input>
						</div>
						<button
							type="submit"
							class="btn btn-primary"
							id="boton-login"
							onclick="Almacenar(name, password)"
						>
							<i className="fas fa-sign-in-alt"></i> Ingresar
						</button>
					</form>
					<div className="col-12 forgot">
						<a href="#">Recordar contraseña</a>
					</div>
				</div>
			</div>
			<Validar user={user} />
		</div>
	);
}
