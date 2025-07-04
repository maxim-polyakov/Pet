import express from 'express';

import petRouter from './pet/index.js';

import updateLastVisit from '../middleware/updateLastVisit.js';

const apiRouter = new express.Router();

//  Назначить обработчики маршрутизации.
apiRouter.use('/mypet', updateLastVisit, petRouter);

export default apiRouter;