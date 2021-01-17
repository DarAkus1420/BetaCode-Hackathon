import User from './model';
import { okResponse } from '../../utils/responses';

const userService = {
	async verifyIfEmailExists(email) {
		const formatedEmail = email.toLowerCase();
		const user = await User.findByEmail(formatedEmail);
		if (user) return true;
		return false;
	},
	async getUser(id) {
		let user = await User.getUserWithoutPassword(id);
		return okResponse('usuario conseguido', { user });
	},
	async addFavSong(id, idSong) {
		let user = await User.getUserWithoutPassword(id);
		user.idFavSong.push(idSong);
		await user.save();
		return okResponse('cancion agregada', { user });
	},
	async removeFavSong(id, idSong) {
		let user = await User.getUserWithoutPassword(id);
		user.idFavSong = user.idFavSong.filter(id => id !== idSong);
		await user.save();
		console.log(user);
		return okResponse('cancion eliminada', { user });
	},
};

export default userService;
