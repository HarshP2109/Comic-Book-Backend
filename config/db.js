const mongoose = require('mongoose');
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const MongoURL = process.env.MongoDBURL;

console.log("DB Connected");

const mainDb = mongoose.createConnection(MongoURL);

module.exports = {mainDb};
