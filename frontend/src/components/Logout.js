import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout(props) {
	const { setIsUser } = props;
	const history = useHistory();

	const limpiar = () => {
		localStorage.clear();
		setIsUser(false);
		history.push('/login');
	};

	return (
		<>
			<button className="btn" onClick={limpiar}>
				Desconectarse
			</button>
		</>
	);
}
