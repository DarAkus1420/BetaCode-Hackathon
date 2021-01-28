import { okResponse } from '../../utils/responses';
import spotifyService from '../../services/spotify';
import youtubeService from '../../services/youtube';
import lyricsService from '../../services/lyrics';
import configDefault from '../../config';
import songRepository from './repository';

const { SEARCH_SUCCESS } = configDefault.responseMessage.songs;

const promiseAditionalData = item => {
	return new Promise(async (resolve, reject) => {
		let nameSong = item.name;
		let artistSong = item && item.artists && item.artists[0] ? item.artists[0].name : null;

		let video = await youtubeService.search(artistSong, nameSong);
		let lyrics = await lyricsService.search(artistSong, nameSong);

		item.video = video;
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
	async save(data) {
		let existSong = await songRepository.searchByIdSpotify(data.spotifyId);
		if (existSong) return existSong;

		let saveSong = await songRepository.save(data);
		if (saveSong.length > 0) {
			return saveSong[0];
		}
		return null;
	},
};

export default songService;
