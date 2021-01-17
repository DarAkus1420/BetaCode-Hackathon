import React from 'react';
import Esquema from './Esquema';
import Header from './Header';
import Busqueda from './Busqueda';
//import Footer from './Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<Busqueda />
			<Esquema />
		</div>
	);
}
