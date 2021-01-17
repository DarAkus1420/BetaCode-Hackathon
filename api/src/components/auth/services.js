import User from '../users/model';
import { sign } from 'jsonwebtoken';
import { JWT_EXPIRATION, JWT_PASS, DEBUG } from '../../config/dotenv';
import { createdResponse, conflictResponse } from '../../utils/responses';
import userService from '../users/services';

const authService = {
	generateJwt(user) {
		const payload = {
			username: user.name,
			sub: user._id,
		};

		const jwt = sign(payload, JWT_PASS, {
			expiresIn: JWT_EXPIRATION,
		});
		console.log('Jwt creado con exito');
		return jwt;
	},

	login(user) {
		const jwt = this.generateJwt(user);
		return createdResponse('Jwt creado con exito', { token: jwt, user });
	},
	async register(payload) {
		// evaluate if email alredy used a person
		const emailExists = await userService.verifyIfEmailExists(payload.email);
		if (emailExists) return conflictResponse('Correo en uso');

		let user = await User.createNewUser(payload);
		await user.save();

		const jwt = this.generateJwt(user);

		console.log(user.email, 'se registro con exito');
		return createdResponse('registrado con exito', { token: jwt, user });
	},
};

export default authService;
