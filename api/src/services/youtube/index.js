import youtubeClient from './client';
import { YOUTUBE_VIDEO_BASE_URL, DEBUG } from '../../config/dotenv';

const search = async songName => {
	try {
		let response = await youtubeClient().searchVideos(songName, 4);
		let dataLength = response.length;
		if (dataLength > 0) {
			let ramdomItem = Math.floor(Math.random() * dataLength);
			return `${YOUTUBE_VIDEO_BASE_URL}${response[ramdomItem].id}`;
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
