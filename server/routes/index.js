import express from 'express';

//create a router - this is like creating different sections in a filing cabinet
const router = express.Router();

//health check route - like a doctor checking if our server is alive
//this is our first API end point
router.get('/health', (req, res) => {
    //when someone visits /api/health, we send back this response
    res.status(200).json({
        status: true,
        message: 'Server is running healthy',
        timestamp: new Date().toISOString(), //CURRENT TIME IN A READABLE FORMAT
    });

    });
    
    export default router;