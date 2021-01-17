import { restResponse, errorResponse } from '../../utils/responses';
import songService from './service';
import { DEBUG } from '../../config/dotenv';

const songController = {
	async search(req, res) {
		try {
			let { query, limit } = req.query;
			console.log(query, limit);
			let response = await songService.search({ query, limit });
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
			//let response = okResponse(SAVE_SUCCESS, saveSong);

			restResponse(response, res);
		} catch (e) {
			if (DEBUG === '1') console.error(e);
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},

};

export default songController;
