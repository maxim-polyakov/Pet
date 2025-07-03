import * as express from 'express';

import clinicController from '../../controllers/pet/index.js';

const clinicRouter = new express.Router();

//  Маршрутизатор отвечающий за обработку запросов связанных с авторизацией.
clinicRouter.post('/pet/heal', clinicController.heal);

export default petRouter;