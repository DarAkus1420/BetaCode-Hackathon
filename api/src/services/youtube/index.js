import youtube from 'scrape-youtube';
import { DEBUG } from '../../config/dotenv';

const search = async (artistSong, nameSong) => {
	try {
		let response = await youtube.search(`${nameSong} ${artistSong}`, { type: 'video' });
		let dataLength = response.videos.length;
		if (dataLength > 0) {
			let randomItem = Math.floor(Math.random() * dataLength);
			return response.videos[randomItem];
		}
		return null;
	} catch (error) {
		if (DEBUG === '1') console.log(error);
		return { message: error.message, code: error.code };
	}
};

export default {
	search,
};
