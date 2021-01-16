import React from 'react';

export default function Esquema() {
	const tema = {
		nombre: 'Nothing Else Matters',
		album: 'Black Album',
		banda: 'Metallica',
	};
	return (
		<div>
			<div className="col-11" id="contenedor-vista-busqueda">
				<div className="card">
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/31PS7MIr-ZL._SX300_SY300_QL70_ML2_.jpg"
						className="card-img-top"
					></img>
					<div className="card-body">
						<p>{tema.nombre}</p>
						<p>{tema.album}</p>
						<p>{tema.banda}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
