import './config/dotenv';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import passportConfig from './config/passportConfig';
import expressConfig from './config/expressConfig';
import { url_db } from './config/dotenv';

const app = express();
expressConfig(app);

passportConfig(passport);
app.use(passport.initialize());
// mongoose.connect(url_db)
// .then(console.log('Data base online'))
// .catch(error => console.error(error));

export default app;

