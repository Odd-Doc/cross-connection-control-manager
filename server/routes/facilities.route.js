import express from 'express';
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('Facilities Page');
});

export default router;