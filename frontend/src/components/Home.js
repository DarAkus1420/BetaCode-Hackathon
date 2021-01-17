import React from 'react';
import Esquema from './Esquema';
import Header from './Header';
import Busqueda from './Busqueda';
import FavoriteSongs from './FavoriteSongs';
//import Footer from './Footer';

export default function Home(props) {
	const { isUser } = props;
	return (
		<div>
			<Header />
			<Busqueda />
			{isUser ? <FavoriteSongs /> : ''}
			<Esquema />
		</div>
	);
}
