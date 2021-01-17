import React from 'react';
/*import { useCombobox } from 'downshift';
import { Input } from 'antd';*/

const Busqueda = () => {
	return (
		<>
			<form>
				<div class="form-group">
					<label for="busqueda">Buscar canción</label>
					<input
						type="text"
						class="form-control"
						id="busqueda"
						aria-describedby="busquedaCancion"
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
