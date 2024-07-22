import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Tracker Home Page');
})

router.get('/devices', (req, res)=>{
    res.send('Devices Page');
});

module.exports = router;