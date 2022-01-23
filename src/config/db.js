const mongoose = require('mongoose');


// const connectDB = () => {
//     mongoose.connect(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(con => {
//         console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
//     })
// }

const connectDB = () => { mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    });
}

module.exports = connectDB