//main express app
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

//create our express application 
//think of this as setting up our restaurant kitchen
const app = express();

//helmet adds security headers - like having security cameras in our restaurant
app.use(helmet());

//CORS allows our frontend to talk to this backend 
//its like telling the security guard which friends are allowed to visit
app.use(cors({
    origin: config.clientUrl, //only allow our frontend to connect
    credentials: true, //allow cookies and authentication
}));

//morgan logs all requests - like a receptionist writing down who visited 
app.use(morgan('dev'));

//express.json helps us read json data from requests
//its like having a translator that understands json language
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for parsing form data

// al our api routes start with /api
//this is like having our tools in one labelled drawer
app.use('/api', routes);

//handle 404 errors - when someone tries to visit a page that does not exist 
app.use(notFound);

//Added root route for Render health check
app.get("/", (req, res) => {
  res.send("Moda API is running");
});

//global error handler - catches any errors and sends nice responses 
app.use(errorHandler);

export default app;


