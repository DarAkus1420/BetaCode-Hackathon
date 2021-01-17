import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {
	const history = useHistory();

	const limpiar = () => {
		localStorage.clear();
		history.push('/');
	};

	return (
		<>
			<button className="btn" onClick="limpiar">
				Desconectarse
			</button>
		</>
	);
}
