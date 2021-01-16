import { okResponse, restResponse, errorResponse } from '../../utils/responses';
import configDefault from '../../config';
import spotifyService from '../../services/spotify';
import aditionalData from '../../libs/aditionalData';
import songRepository from './repository';
import { DEBUG } from '../../config/dotenv';
const { SEARCH_SUCCESS } = configDefault.responseMessage.songs;

const songController = {
	async search(req, res) {
		try {
			let { query, limit } = req.query;

			let spotifyData = await spotifyService.search({ query, limit });
			let extendsInfoData = await aditionalData.add(spotifyData);

			let response = okResponse(SEARCH_SUCCESS, extendsInfoData);
			restResponse(response, res);
		} catch (e) {
			if (DEBUG === '1') console.error(e);
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
	async save(req, res) {
		try {
			let data = req.body;

			let saveSong = await songRepository.save(data);
			let response = okResponse(SAVE_SUCCESS, saveSong);

			restResponse(response, res);
		} catch (e) {
			if (DEBUG === '1') console.error(e);
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
};

export default songController;
