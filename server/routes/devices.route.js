import express from 'express';
import { addDevice, getDevice } from '../controllers/device.controller.js';
const router = express.Router();




// router.get('/', getDevice)
// router.post('/', addDevice);

router.route('/device').get((req, res) => {
    res.json('device page');
}).post((req, res) => {
    res.json('post meh');
})



export default router;