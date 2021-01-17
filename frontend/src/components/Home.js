import React from 'react';
import Esquema from './Esquema';
import Busqueda from './Busqueda';
import FavoriteSongs from './FavoriteSongs';
//import Footer from './Footer';

export default function Home(props) {
	const { isUser } = props;
	return (
		<div>
			<Busqueda />
			{isUser ? <FavoriteSongs /> : ''}
			<Esquema />
		</div>
	);
}
