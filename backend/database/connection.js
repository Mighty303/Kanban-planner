const mongoose = require("mongoose");
require('dotenv').config();

let mongoDB = process.env.DB_CONNECTION;
mongoose.connect(mongoDB, { useNewUrlParser: true,  useUnifiedTopology: true });

module.exports = mongoose.connection;