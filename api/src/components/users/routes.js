import { Router } from 'express';
import passport, { session } from 'passport';
import validation from '../../middleware/validation';
import userController from './controller';

const userRouter = Router();

userRouter.get(
	'/user/profile',
	passport.authenticate('jwt', { session: false }),
	userController.getUser
);
