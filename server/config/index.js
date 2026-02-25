import dotenv from 'dotenv';

//load environment variable from .env file 
//this is like reading secrete instructions from a hidden note
dotenv.config();

//configuration object that holds all our settings 
//we put them al in one place so its easy to find and change 
const config = {
    env: process.env.NODE_ENV || 'development', //what mode are we in? development or production?
    port:process.env.PORT || 5000, //which door (port) should our server listen on?
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000', //where is our frontend located?

};

export default config; //we share this config object with the rest of our app so everyone can use the settings  