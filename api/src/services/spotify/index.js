import spotifyClient from './client';
import _ from 'lodash';
import { DEBUG } from '../../config/dotenv';

const filterKeys = [
	'id',
	'name',
	'type',
	'album',
	'artists',
	'external_urls',
	'duration_ms',
	'popularity',
];

const cleanResponse = response => {
	return _.map(response, object => _.pick(object, filterKeys));
};

const search = async ({ query, limit = 10, type = 'track' }) => {
	try {
		let tracks = [];
		let spotify = spotifyClient();
		let response = await spotify.search({ type, query, limit });

		if (response && response.tracks && response.tracks.items) {
			tracks = cleanResponse(response.tracks.items);
		}

		return { items: tracks };
	} catch (e) {
		if (DEBUG === '1') console.log(e);
		return null;
	}
};

export default {
	search,
};
