const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {db, port} = require('./config');
const router = require('./router');

// create the express app
const app = express();

mongoose.Promise = global.Promise;

// connecting to the db
mongoose.connect(db, {
    useMongoClient: true
});

// use express middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));


router(app);

// starting the server
app.listen(process.env.PORT || port, function() {
    console.log('The server is running...')
})
