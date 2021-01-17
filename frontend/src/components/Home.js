import React from 'react';
import Esquema from './Esquema';
import FavoriteSongs from './FavoriteSongs';
//import Footer from './Footer';

export default function Home(props) {
	const { isUser } = props;
	return (
		<div>
			{isUser ? <FavoriteSongs /> : ''}
			<Esquema />
		</div>
	);
}
