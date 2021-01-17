import { restResponse, errorResponse } from '../../utils/responses';
import songService from './service';
import { DEBUG } from '../../config/dotenv';

const songController = {
	async search(req, res) {
		try {
			let { query, limit } = req.query;
			let response = await songService.search({ query, limit });
			restResponse(response, res);
		} catch (e) {
			if (DEBUG === '1') console.error(e);
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
};

export default songController;
