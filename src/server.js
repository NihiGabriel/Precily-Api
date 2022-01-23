const app = require('./config/app');
const connectDB = require('./config/db');

const connect = async() => {
    // connect to DB
     await connectDB();

}

connect();

// define port
const PORT = process.env.PORT || 5000;

// create server
const server = app.listen(
    PORT,
    console.log(` app running in ${process.env.NODE_ENV} mode on port ${PORT}`) 
)

// handle unhandle romise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`err: ${err.message}`);
    server.close(() => process.exit(1));
})