import userService from './services';
//import songService from '../song/service';
import { restResponse, errorResponse } from '../../utils/responses';

const userController = {
	async getUser(req, res) {
		try {
			let { user } = req;
			const response = await userService.getUser(user._id);
			restResponse(response, res);
		} catch (e) {
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
	async addFavSong(req, res) {
		try {
			let { user } = req;
			let { song } = req.body;
			console.log(user, song);
			//await songService;
			const response = await userService.addFavSong(user._id, song._id);
			restResponse(response, res);
		} catch (e) {
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
	async removeFavSong(req, res) {
		try {
			let { user, song } = req;
			const response = await userService.removeFavSong(user._id, song._id);
			restResponse(response, res);
		} catch (e) {
			const error = errorResponse(e);
			restResponse(error, res);
		}
	},
};

export default userController;
