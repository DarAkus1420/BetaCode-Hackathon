import './config/dotenv';
import express from 'express';

import expressConfig from './config/expressConfig';
import dbConnection from './libs/db/mongoose';

import passport from 'passport';
import passportConfig from './config/passportConfig';

import routes from './routes/index';

const app = express();
expressConfig(app);

dbConnection()
	.then(resp => console.log(resp))
	.catch(err => console.error(err));

routes(app);

passportConfig(passport);
app.use(passport.initialize());
export default app;
