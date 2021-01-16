export default function Validar(props) {
	let nameV = props.name;
	let passwordV = props.password;

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
