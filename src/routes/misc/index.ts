import express from 'express';
import statusRoute from './status';

const miscRouter = express.Router();

miscRouter.use(statusRoute);

export { miscRouter };
