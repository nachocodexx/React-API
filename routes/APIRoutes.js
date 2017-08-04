import express from 'express';
import {getDrivers,createDriver,deleteDriver,updateDriver} from '../controllers/APIControllers';
const api = express.Router();

api.get('/drivers',getDrivers);

api.post('/drivers',createDriver);

api.delete('/drivers/:id',deleteDriver);
api.put('/drivers/:id',updateDriver);


export default api;
