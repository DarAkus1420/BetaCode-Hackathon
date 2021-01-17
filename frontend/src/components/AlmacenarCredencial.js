import React from 'react';

export default function Almacenar(props) {
	const user = {
		name=props.name,
		password=props.password
	};

	console.log(props);

	return user;
}
