import { Router } from 'express';

const statusRoute = Router();

statusRoute.get('/status', (_, res) => {
    res.status(200).json({
        status: 'online',
    });
});

export default statusRoute;
