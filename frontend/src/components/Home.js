import React, { useState } from 'react';
import Esquema from './Esquema';
import Busqueda from './Busqueda';
//import Footer from './Footer';

export default function Home(props) {
	const { isUser } = props;

	const [songs, setSongs] = useState([]);
	return (
		<div>
			<Busqueda setSongs={setSongs} />
			<Esquema songs={songs} isUser={isUser} />
		</div>
	);
}
