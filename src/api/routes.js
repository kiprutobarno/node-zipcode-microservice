import { Router } from 'express';
import controller from './controller';

const routes = Router();

routes.get('/about', controller.about);

routes.get('/distance/:zipcode1/:zipcode2', controller.getDistance);

export default routes;
