import { Hono } from 'hono';
import  ReadAllCitiesController  from '../controllers/city/ReadAllCitiesController';
import  ReadOneCityController  from '../controllers/city/ReadOneCityController';

const cityRoutes = new Hono();

cityRoutes.get('/', ReadAllCitiesController);
cityRoutes.get('/:slug', ReadOneCityController);

export default cityRoutes;
