// server entry Point
import app from './app.js';
import config from './config/index.js';

//this is where we actually start our server 
//thing of this as turning on the restaurant OPEN sing

const startServer = () => {
    try {
        //tell our ap to listen fo connections on our specified port 
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
            console.log(`Environment: ${config.env}`);
            console.log(` Client URL: ${config.clientUrl}`);
               console.log(` Health check: http://localhost:${config.port}/api/health`);
        });

    } catch (error) {
        //if something goes wrong starting the server, log it and exit
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

//start the server 
startServer();