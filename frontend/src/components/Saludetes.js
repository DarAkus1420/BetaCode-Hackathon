import React from 'react';

export default function Saludetes(props) {
	return (
		<div>
			<p>
				Saludos {props.name}. Felices {props.edad} años y más.
			</p>
		</div>
	);
}
