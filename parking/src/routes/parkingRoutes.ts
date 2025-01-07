import { Hono } from 'hono';
import  ReadAllParkingsController  from '../controllers/parking/ReadAllParkingsController';
import  ReadOneParkingController  from '../controllers/parking/ReadOneParkingController';

const parkingRoutes = new Hono();

parkingRoutes.get('/', ReadAllParkingsController);
parkingRoutes.get('/:id', ReadOneParkingController);

export default parkingRoutes;
