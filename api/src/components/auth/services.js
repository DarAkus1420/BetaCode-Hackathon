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
		if (DEBUG === '1') console.log('Jwt creado con exito');
		return createdResponse('Jwt creado con exito', { jwt, user });
	},
	async register(payload) {
		// evaluate if email alredy used a person
		const emailExists = await userService.verifyIfEmailExists(payload.email);
		if (emailExists) return conflictResponse('Correo en uso');

		let user = await User.createNewUser(payload);
		await user.save();

		if (DEBUG === '1') console.log(user.email, 'se registro con exito');
		return createdResponse('registrado con exito', { token: this.generateJwt(user), user });
	},
};

export default authService;
