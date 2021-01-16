import User from './model';

const userService = {
	async verifyIfEmailExists(email) {
		const formatedEmail = email.toLowerCase();
		const user = await User.findByEmail(formatedEmail);
		if (user) return true;
		return false;
	},
};

export default userService;
