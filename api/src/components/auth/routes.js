import { Router } from 'express';
import passport from 'passport';
import authController from './controller';
import validation from '../../middleware/validation';
import authSchema from './schema';

const authRouter = Router();

authRouter.post(
	'/auth/login',
	passport.authenticate('local', { session: false }),
	authController.generateJwt
);

authRouter.post('/auth/register', validation(authSchema.register, 'body'), authController.register);

export default authRouter;
