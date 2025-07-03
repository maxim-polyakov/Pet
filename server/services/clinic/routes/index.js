import express from 'express';

import clinicRouter from './clinic/index.js';

import updateLastVisit from '../middleware/updateLastVisit.js';

const apiRouter = new express.Router();

//  Назначить обработчики маршрутизации.
apiRouter.use('/clinic', updateLastVisit, clinicRouter);

export default apiRouter;