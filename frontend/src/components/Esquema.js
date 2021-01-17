import React from 'react';
import Song from './Song';

export default function Esquema(props) {
	const { songs } = props;

	return (
		<div id="contenedor-cards">
			<div className="col-11 container card-columns" id="contenedor-vista-busqueda">
				{songs.map(song => {
					return <Song song={song} isUser={isUser} />;
				})}
			</div>
		</div>
	);
}
