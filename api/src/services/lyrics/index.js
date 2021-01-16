import { API_LYRICS_URL, DEBUG } from '../../config/dotenv';
import axios from 'axios';

const search = async (artist, name) => {
	try {
		name = name.replace(' ', '-');
		let endpoint = `${API_LYRICS_URL}/${artist}/${name}`;
		const response = await axios.get(endpoint);
		return response && response.data && response.data.lyrics ? response.data.lyrics : null;
	} catch (error) {
		if (DEBUG === '1') console.log(error);
		return null;
	}
};

export default {
	search,
};
