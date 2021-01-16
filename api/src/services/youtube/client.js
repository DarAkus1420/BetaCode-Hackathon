import YouTube from 'simple-youtube-api';
import { YOUTUBE_API_KEY } from '../../config/dotenv';

const client = () => {
	return new YouTube(YOUTUBE_API_KEY);
};

export default client;
