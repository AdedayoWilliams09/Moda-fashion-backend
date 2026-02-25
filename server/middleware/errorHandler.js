//this is like a safety net that catches any errors in our server 
//if something goes wrong, this makes sue we send a nice error message instead of crashing

const errorHandler = (err, req, res, next) => {
    //log the error for developers to see
    console.error(err.stack);

    //send a response to the client 
    res.status(500).json({
        success: false,
        message: 'Something went wrong on the server',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
    };

    //MIDDLEWARE FOR HANDLING 404 ERRORS (PAGE NOT FOUND )
    const notFound = (req, res, next) => {
        const error = new Error(`Not Found - ${req.originalUrl}`);
        res.status(404);
        next(error);
        };
    
        export { errorHandler, notFound };