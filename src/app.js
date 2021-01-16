import './config/dotenv';
import express from 'express';
import expressConfig from './config/expressConfig';
import dbConnection from './libs/db/mongoose';
import search from './components/search/routes';

const app = express();
expressConfig(app);

dbConnection()
	.then(resp => console.log(resp))
	.catch(err => console.error(err));

const basePath = '/v1/api';
const defaultResponseAPI = (_, res) => {
	res.status(200).json({
		msg: 'API is running',
	});
};

app.get(basePath, defaultResponseAPI);
app.use(`${basePath}/search`, search);

export default app;
