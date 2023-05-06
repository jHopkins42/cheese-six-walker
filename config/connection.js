require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/cheese-six-walker",
    {
        useNewURLParser: true,
        useUnifdeTopology: false,
    }
);


module.exports = mongoose.connection;
