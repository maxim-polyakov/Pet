import * as express from 'express';

import petController from '../../controllers/pet/index.js';

const petRouter = new express.Router();

//  Маршрутизатор отвечающий за обработку запросов связанных с авторизацией.
petRouter.get('/pets', petController.pets);
petRouter.post('/pet', petController.pet);
petRouter.post('/create_pet', petController.create_pet);
petRouter.post('/pet/feed', petController.feed);
petRouter.post('/pet/play', petController.play);
petRouter.post('/pet/heal', petController.heal);
petRouter.post('/pet/push', petController.push);

export default petRouter;