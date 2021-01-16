import express from 'express'
const router = express.Router();

import controller from './controller';

router.get('/', async (req, res) => {
    let response = await controller.save({ query: 'umbrella rihanna', response: { title: 'Umbrela', artist: 'Rihanna', year: 2009 } })
    res.json({
        msg: response
    });
});

export default router;