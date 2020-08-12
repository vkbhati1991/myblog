const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors')

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.plugin(mongodbErrorHandler);

const dbUrl = process.env.URL;
const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(dbUrl, dbOptions);