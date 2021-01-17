import { API_LYRICS_URL, DEBUG } from '../../config/dotenv';
import axios from 'axios';

const formatData = value => {
	return value.replace(' ', '-').toLowerCase();
};

const search = async (artist, name) => {
	try {
		name = formatData(name);
		artist = formatData(artist);

		let endpoint = `${API_LYRICS_URL}/${artist}/${name}`;
		const response = await axios.get(endpoint);

		return response && response.data && response.data.lyrics && response.data.lyrics !== ''
			? endpoint
			: null;
	} catch (error) {
		if (DEBUG === '1') console.log(error);
		return { message: error.message, code: error.code };
	}
};

export default {
	search,
};
