import { Router } from 'express';
import passport from 'passport';
//import validation from '../../middleware/validation';
import userController from './controller';

const userRouter = Router();

userRouter.get(
	'/user/profile',
	passport.authenticate('jwt', { session: false }),
	userController.getUser
);

userRouter.post(
	'/user/song',
	passport.authenticate('jwt', { session: false }),
	userController.addFavSong
);

userRouter.delete(
	'/user/song',
	passport.authenticate('jwt', { session: false }),
	userController.removeFavSong
);

export default userRouter;
