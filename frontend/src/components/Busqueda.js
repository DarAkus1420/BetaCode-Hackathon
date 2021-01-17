import React, { useState } from 'react';
import axios from 'axios';
/*import { useCombobox } from 'downshift';
import { Input } from 'antd';*/

const Busqueda = props => {
	const { setSongs } = props;
	const BASE_URL = 'http://localhost:3000/api/v1';
	const [search, setSearch] = useState();

	const handleInputChange = event => {
		setSearch(event.target.value);
	};

	const sendSearch = event => {
		event.preventDefault();
		axios
			.get(`${BASE_URL}/songs?query=${search}&limit=10`)
			.then(response => {
				console.log(response.data.data.data);
				setSongs(response.data.data.data);
			})
			.catch(e => {
				console.log(e.response);
			});
	};

	return (
		<>
			<form onSubmit={sendSearch}>
				<div class="form-group">
					<label for="busqueda">Buscar canción</label>
					<input
						type="text"
						class="form-control"
						id="busqueda"
						aria-describedby="busquedaCancion"
						onChange={handleInputChange}
						placeholder="Ingresa canción"
					/>
					<small id="ayudaBusqueda" class="form-text text-muted">
						Ingresa la canción que quieres buscar
					</small>
				</div>
			</form>
		</>
	);
};

export default Busqueda;
