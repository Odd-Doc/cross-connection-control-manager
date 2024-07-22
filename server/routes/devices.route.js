import express from 'express';
import { addDevice, getDevice } from '../controllers/device.controller.js';
const router = express.Router();


// router.get('/', (req, res)=>{
//     res.send('Devices Page');
// });

router.get('/getDevice', getDevice)
router.post('/addDevice', addDevice, ()=>{
    console.log('herere')
});




export default router;