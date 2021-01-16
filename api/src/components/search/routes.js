import express from 'express';
const router = express.Router();

import controller from './controller';

router.get('/', async (req, res) => {
	let response = await controller.save(req.body);
	res.json({
		msg: response,
	});
});

export default router;
