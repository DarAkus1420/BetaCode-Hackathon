import authService from './services';
import { restResponse, errorResponse } from '../../utils/responses';
import { DEBUG } from '../../config/dotenv';

const authController = {
	async generateJwt(req, res) {
		try {
			let { user } = req;
			console.log(user);
			const response = authService.login(user);
			console.log(response);
			restResponse(response, res);
		} catch (e) {
			if (DEBUG === '1') console.error(e);
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
	async register(req, res) {
		try {
			const { body } = req;
			if (DEBUG === '1') console.log(body);
			const response = await authService.register(body);
			if (DEBUG === '1') console.log(response);
			restResponse(response, res);
		} catch (e) {
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
};

export default authController;
