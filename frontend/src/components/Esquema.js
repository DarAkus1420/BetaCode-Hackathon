import React from 'react';

export default function Esquema() {
	const tema = {
		nombre: 'Nothing Else Matters',
		album: 'Black Album',
		banda: 'Metallica',
	};
	const tema2 = {
		nombre: 'Trashed, Lost & Strungout',
		album: 'Are You Dead Yet?',
		banda: 'Children Of Bodom',
	};
	const tema3 = {
		nombre: 'Twilight Of The Thunder God',
		album: 'Twilight Of The Thunder God',
		banda: 'Amon Amarth',
	};

	return (
		<div>
			<div className="col-11 container card-columns" id="contenedor-vista-busqueda">
				<div className="card">
					<div className="card-body">
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/31PS7MIr-ZL._SX300_SY300_QL70_ML2_.jpg"
							className="card-img-top"
						></img>
					</div>
					<div className="card-footer">
						<p>{tema.nombre}</p>
						<p>{tema.album}</p>
						<p>{tema.banda}</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img
							src="https://m.media-amazon.com/images/I/810VnW1uLnL._SS500_.jpg"
							className="card-img-top"
						></img>
					</div>
					<div className="card-footer">
						<p>{tema2.nombre}</p>
						<p>{tema2.album}</p>
						<p>{tema2.banda}</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img
							src="https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2018/09/91w-mtJmHL._SL1500_.jpg"
							className="card-img-top"
						></img>
					</div>
					<div className="card-footer">
						<p>{tema3.nombre}</p>
						<p>{tema3.album}</p>
						<p>{tema3.banda}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
