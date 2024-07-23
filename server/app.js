import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import home from './routes/home.route.js';
import deviceRouter from './routes/devices.route.js';
import facilities from './routes/facilities.route.js';
import mongoose from 'mongoose';
import { DeviceModel } from './models/device.model.js';
import { addDevice } from './controllers/device.controller.js';

const app = express();
app.use(cors());

app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri);



app.use('/', deviceRouter);





const listener = app.listen(process.env.PORT || 3001, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})