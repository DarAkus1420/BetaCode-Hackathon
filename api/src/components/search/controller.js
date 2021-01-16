import Search from './repository';

const validate = ({ artist, song, response }) => {
	if (!artist) {
		return '[artist] This field is required';
	}

	if (!song) {
		return '[song] This field is required';
	}

	if (!response) {
		return '[response] This field is required';
	}

	return true;
};

const save = async data => {
	let validateData = validate(data);
	if (validateData !== true) {
		return validateData;
	}

	return await Search.save(data);
};

export default {
	save,
};
