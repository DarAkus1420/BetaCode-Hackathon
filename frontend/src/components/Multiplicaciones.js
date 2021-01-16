import React from 'react';

export default function Multiplicaciones(props) {
	return (
		<div>
			<p>{props.a * props.b}</p>
			<p>{props.a + props.b}</p>
		</div>
	);
}
