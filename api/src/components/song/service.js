import { okResponse } from '../../utils/responses';
import spotifyService from '../../services/spotify';
import youtubeService from '../../services/youtube';
import lyricsService from '../../services/lyrics';
import configDefault from '../../config';

const { SEARCH_SUCCESS } = configDefault.responseMessage.songs;

const promiseAditionalData = item => {
	return new Promise(async (resolve, reject) => {
		let nameSong = item.name;
		let artistSong = item && item.artists && item.artists[0] ? item.artists[0].name : null;

		let videoLink = await youtubeService.search(nameSong);
		let lyrics = await lyricsService.search(artistSong, nameSong);

		item.youtubeLink = videoLink;
		item.lyrics = lyrics;
		resolve(item);
	});
};

const addAditionalData = async data => {
	let promises = [];
	for (let i = 0; i < data.items.length; i++) {
		promises.push(promiseAditionalData(data.items[i]));
	}

	return await Promise.all(promises);
};

const songService = {
	async search({ query, limit }) {
		let spotifyData = await spotifyService.search({ query, limit });
		let extendsInfoData = await addAditionalData(spotifyData);

		return okResponse(SEARCH_SUCCESS, { data: extendsInfoData });
	},
};

export default songService;
