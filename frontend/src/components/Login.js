import React from 'react';

export default function Login() {
	return (
		<div class="modal-dialog text-center">
			<div class="col-sm-8 main-section">
				<div class="modal-content">
					<div class="col-12 user-img">
						<img src=""></img>
					</div>
					<form class="col-12">
						<div class="form-group" id="user-group">
							<input
								type="text"
								class="form-control"
								placeholder="Nombre de usuario"
							></input>
						</div>
						<div class="form-group" id="constraseña-group">
							<input type="text" class="form-control" placeholder="Password"></input>
						</div>
						<button type="submit" class="btn btn-primary" id="boton-login">
							<i class="fas fa-sign-in-alt"></i> Ingresar
						</button>
					</form>
					<div class="col-12 forgot">
						<a href="#">Recordar contraseña</a>
					</div>
				</div>
			</div>
		</div>
	);
}
