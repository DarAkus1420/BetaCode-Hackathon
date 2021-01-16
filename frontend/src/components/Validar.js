export default function Validar(name, password) {
	let nameV = name;
	let passwordV = password;

	let probName = '';
	let probPass = '';

	let validacion = false;

	if (nameV == probName && passwordV == probPass) {
		validacion = true;
	} else {
		validacion = false;
	}

	return validacion;
}
