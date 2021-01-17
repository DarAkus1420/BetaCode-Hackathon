import Spotify from 'node-spotify-api';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '../../config/dotenv';

const client = () => {
	return new Spotify({
		id: SPOTIFY_CLIENT_ID,
		secret: SPOTIFY_CLIENT_SECRET,
	});
};

export default client;
