import { Router } from 'express';
import validation from '../../middleware/validation';
import authSchema from './schema';
import songController from './controller';

const authRouter = Router();

authRouter.get('/songs', validation(authSchema.search, 'query'), songController.search);
authRouter.post('/songs', validation(authSchema.save, 'body'), songController.save);

export default authRouter;
