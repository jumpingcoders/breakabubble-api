const mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.MONGO_SERVER,{
    useMongoClient:false,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD
});

module.exports = mongoose;